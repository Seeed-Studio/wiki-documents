---
title: 构建 reCamera 与 NVIDIA Jetson VLM 事件网关
description: 部署一个两阶段视觉应用：reCamera 使用 YOLOv8 检测人，NVIDIA Jetson 使用 Qwen3-VL 识别红色衣物并发布 WebSocket 事件。
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
url: https://wiki.seeedstudio.com/cn/recamera_jetson_vlm_gateway/
---

# 构建 reCamera 与 NVIDIA Jetson VLM 事件网关

## 介绍

本指南部署一个完整的两阶段视觉演示：

1. 一台 reCamera Basic 持续运行 YOLOv8。
2. 只有在检测到有人时，它才将该帧发送到 NVIDIA Jetson。
3. Jetson 上的 Qwen3-VL 判断该帧中是否包含穿着明显红色衣物的人。
4. Jetson 通过 WebSocket 广播红衣人员告警或场景描述。
5. reCamera 还提供带有人体框的 1920×1080 H.264 RTSP 流。

```text
reCamera Basic                     NVIDIA Jetson                         Client
YOLOv8 person detector             :8080 llama-server + Qwen3-VL
  |                                :8000 Vision Gateway
  +-- HTTP Base64 JPEG -----------> analyze -> structured VLM result
  +-- RTSP :8554/live0             +---------------- WebSocket /ws ----> app
```

这种架构将持续目标检测放在低功耗的 reCamera 上，只在有人出现时才调用更大的视觉语言模型。这样可以减少 Jetson 的推理请求次数，同时仍为下游应用提供自然语言的场景理解。

:::note
本项目中的预构建应用面向 **搭载 SG2002 RISC-V SoC 的 reCamera Basic**。它不能在基于 aarch64 的 reCamera Pro 上运行。
:::

## 硬件准备

| 项目 | 用途 |
|---|---|
| [reCamera 2002 Series](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) | 运行 YOLOv8 人体检测和 RTSP 流 |
| NVIDIA Jetson Orin 设备 | 运行 llama.cpp、Qwen3-VL 和 Vision Gateway |
| 开发电脑 | 将应用复制到 reCamera，并订阅 RTSP/WebSocket 输出 |
| LAN 或 USB/以太网网络 | 连接 reCamera、Jetson 和客户端 |

## 软件要求

- reCamera Basic（SG2002/RISC-V），而不是 reCamera Pro。
- 搭载 JetPack、CUDA 的 NVIDIA Jetson Orin，推荐至少 8 GB 统一内存。
- 两台设备在同一可信 LAN 上，且 IP 地址可互相访问。
- Jetson 上安装 Git 和 Python 3.10+。
- 一个兼容的 Qwen3-VL GGUF 语言模型及其匹配的 `mmproj` 文件。

在 Jetson 或开发电脑上下载演示仓库：

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
```

本指南使用 `/home/nvidia/recamera_vl` 以及以下占位符：

```text
JETSON_IP    Jetson LAN address, for example 192.168.4.33
RECAMERA_IP  reCamera LAN address
```

:::caution
llama.cpp 的多模态子系统变化很快，其官方文档也警告可能出现破坏性变更。请固定一个经过测试的 llama.cpp 提交版本，以实现可复现的部署。多模态模型通常需要语言 GGUF 和匹配的 projector。请参阅官方的[多模态文档](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd)和[服务器文档](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)。
:::

## 设置 NVIDIA Jetson

### 步骤 1：检查 JetPack 和 CUDA

在 Jetson 上：

```bash
uname -m
cat /etc/nv_tegra_release
nvcc --version
```

期望的架构是 `aarch64`。如果缺少 `nvcc`，请先安装包含 CUDA 开发工具包的 JetPack 版本再继续。你可以使用以下命令监控设备：

```bash
sudo tegrastats
```

可选的图形界面监控工具：

```bash
sudo python3 -m pip install jetson-stats
jtop
```

### 步骤 2：安装构建依赖

```bash
sudo apt update
sudo apt install -y git cmake build-essential ninja-build pkg-config \
  libssl-dev python3-venv curl
mkdir -p /home/nvidia/recamera_vl
cd /home/nvidia/recamera_vl
```

当 llama-server 需要自行获取 HTTPS 图像时，OpenSSL 很有用。本演示发送的是 Base64 数据 URI，因此不依赖远程图像获取。

### 步骤 3：使用 CUDA 构建 llama.cpp

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

Jetson Orin 使用计算能力 8.7。如果使用的是其他 Jetson，请选择合适的 CUDA 架构。内存较小的设备可能需要使用 `-j1`。

验证输出和 CUDA 后端：

```bash
file build/bin/llama-server
build/bin/llama-server --list-devices
```

列表中应包含 CUDA 设备，而不是只有 CPU。

### 步骤 4：准备 Qwen3-VL 模型

从同一个可信的模型发布中获取语言 GGUF 和对应的多模态 projector。不要在不同模型变体或修订版本之间混用 projector。部署前请检查其许可证和校验和。

与下文使用的文件名相匹配的示例目录结构：

```text
/home/nvidia/recamera_vl/models/Qwen3-VL-4B-Instruct-GGUF/
├── Qwen3VL-4B-Instruct-Q8_0.gguf
└── mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf
```

:::caution
在将 CUDA、KV 缓存、projector 和操作系统都计算在内后，Q8 在 8 GB Jetson 上可能会比较吃紧。使用发布方提供的 Q4 变体可以降低内存占用。切勿将无关文件重命名为与本示例匹配。
:::

### 步骤 5：启动 llama-server

创建 `/home/nvidia/recamera_vl/start_qwen3_vl.sh`：

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

然后运行：

```bash
chmod +x /home/nvidia/recamera_vl/start_qwen3_vl.sh
/home/nvidia/recamera_vl/start_qwen3_vl.sh
```

不同版本的 llama.cpp 之间参数可能会变化。如果某个参数被拒绝，请使用同一构建中的 `build/bin/llama-server --help`，而不是从其他版本复制参数。

在另一个终端中：

```bash
curl http://127.0.0.1:8080/health
curl http://127.0.0.1:8080/v1/models
```

如果内存不足，可尝试 `--ctx-size 2048`、使用更小的官方量化模型，或使用 `--no-mmproj-offload`（速度更慢）。KV 缓存量化相关参数也可能可用；请通过 `--help` 确认其名称。

### 步骤 6：安装并启动 Vision Gateway

将此仓库克隆到 `/home/nvidia/reCamera-VLM-Gateway`，然后：

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

捆绑脚本假定 llama-server 运行在 `127.0.0.1:8080`，模型别名为 `qwen3-vl`，并在 `0.0.0.0:8000` 启动一个 worker。请保持单个 worker，因为推理串行化和 WebSocket 连接都在进程内存中。

验证：

```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/api/v1/status
```

健康检查响应中应包含 `status: ok`、`busy: false`，以及 llama-server 的 URL。

### 步骤 7：测试图像分析和 WebSocket

在仓库根目录下：

```bash
base64 -w 0 vision_gateway/image.jpg > /tmp/vision-image.b64
curl http://127.0.0.1:8000/api/v1/analyze \
  -H 'Content-Type: application/json' \
  --data-binary "{\"image_base64\":\"$(</tmp/vision-image.b64)\"}"
```

成功的响应会包含 `red_person_detected`、`message` 和 `processing_ms`。

在发送下一张图像前，从浏览器或应用程序订阅：

```js
const ws = new WebSocket("ws://JETSON_IP:8000/ws");
ws.onmessage = e => console.log(JSON.parse(e.data));
setInterval(() => ws.readyState === WebSocket.OPEN && ws.send("ping"), 30000);
```

事件类型为：

```json
{"type":"red_person_detected","message":"发现了红色衣服的人","request_id":"...","timestamp":0}
```

或：

```json
{"type":"scene_description","message":"...","request_id":"...","timestamp":0}
```

## 设置 reCamera

### 步骤 1：连接到 reCamera

请先完成 [reCamera 入门指南](https://wiki.seeedstudio.com/cn/recamera_getting_started/)。将 reCamera 和 Jetson 连接到同一 LAN，然后确认它们的 IP 地址。reCamera 的默认 USB 网络地址通常为 `192.168.42.1`，但在与 Jetson 通信时，请使用实际网络分配的地址。

:::note
相机资源是排他的。在独立 C++ 应用访问相机之前，必须先停止默认的 `sscma-node` 服务。
:::

### 步骤 2：部署并启动应用

在你的电脑上：

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
scp -r recamera root@RECAMERA_IP:/home/recamera/person-vl
ssh root@RECAMERA_IP
```

在 reCamera 上：

```bash
cd /home/recamera/person-vl
chmod +x run.sh bin/person_vl
killall sscma-node 2>/dev/null || true
JETSON_VL_URL=http://JETSON_IP:8000/api/v1/analyze ./run.sh
```

捆绑的二进制文件面向 reCamera Basic（SG2002/RISC-V），且视频 SDK 需要 root 权限。一次人体检测会排队上传一张 JPEG，默认冷却时间为 10 秒。

使用 RTSP-over-TCP 查看带标注的流：

```bash
ffplay -rtsp_transport tcp rtsp://RECAMERA_IP:8554/live0
```

## 验证完整演示

穿着红色主色衣物走入画面，然后在不穿红色衣物的情况下重复测试。确认以下三种输出：

- reCamera 打印 `[vl] response ... http=200`。
- WebSocket 收到 `red_person_detected` 或 `scene_description`。
- RTSP 显示人体框。

:::tip
Gateway 有意一次只允许一个 VLM 推理。如果使用多台相机，请增加 `VL_COOLDOWN_SECONDS` 或添加外部请求队列。
:::

## 资源

- [reCamera 入门指南](https://wiki.seeedstudio.com/cn/recamera_getting_started/)
- [在 reCamera 上使用 C/C++ 开发](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp/)
- [llama.cpp CUDA 构建文档](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md)
- [llama.cpp 多模态文档](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd)
- [llama.cpp 服务器文档](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)

## 技术支持与产品讨论  

感谢您选择我们的产品！我们提供不同级别的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
