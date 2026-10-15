---
description: 通过在 x86 GPU 主机上导出模型、在 Jetson Orin 或 Jetson Thor 上构建运行时、生成 TensorRT 引擎并验证 C++ 推理，在 JetPack 7.2 上部署 NVIDIA TensorRT Edge-LLM。
title: 在 JetPack 7.2 上部署 TensorRT Edge-LLM
keywords:
  - Jetson
  - TensorRT
  - LLM
  - TensorRT Edge-LLM
  - JetPack 7.2
  - Jetson Orin
  - Jetson Thor
  - ONNX
image: https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png
slug: /deploy_tensorrt_edge_llm_on_jetpack7.2
last_update:
  date: 07/31/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# 在 JetPack 7.2 上部署 TensorRT Edge-LLM

## 概述

[TensorRT Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM) 是 NVIDIA 面向嵌入式 NVIDIA 平台部署大语言模型、视觉语言模型、多模态模型以及部分视觉-语言-动作工作负载的高性能推理栈。它提供检查点导出流水线、TensorRT 引擎构建器、优化的 C++ 运行时、示例以及一个实验性的兼容 OpenAI 的服务器。

JetPack 7.2 是 Jetson Orin 官方支持的 TensorRT Edge-LLM 路径。Jetson Thor 在 JetPack 7.x 上也受支持。本指南固定使用 **TensorRT Edge-LLM v0.9.1**，这是在本页面于 **2026 年 7 月 31 日** 更新时最新发布的版本。

:::note
本指南中的截图复用了 JetPack 6.2 教程中现有的 TensorRT Edge-LLM 工作流图片。整体的主机导出与目标端引擎工作流是相同的，但在 v0.9.1 中，命令名称、构建标志、版本号和控制台输出可能有所不同。
:::

## 平台矩阵

| 目标平台 | 软件发行版 | CMake 目标 | CUDA toolkit 值 | 运行时精度 |
| --- | --- | --- | --- | --- |
| Jetson Orin | JetPack 7.2 | `jetson-orin` | `13.2` | FP16, INT8, INT4 |
| Jetson Thor | JetPack 7.2 | `jetson-thor` | `13.2` | 请查看每个模型和精度对应的支持模型矩阵。 |

:::warning
TensorRT Edge-LLM v0.9.1 在 Jetson Orin 上不支持 FP8、MXFP8、FP4 或 NVFP4 运行时精度。请为 Orin 使用 FP16、INT8 或 INT4 检查点。不要将 JetPack 6.2 上构建的 TensorRT 引擎复制到 JetPack 7.2 中；应在目标 JetPack 7.2 系统上重新构建引擎。
:::

部署分为两个阶段：

1. **在 x86 GPU 主机上导出**：安装 Python 工具并将 Hugging Face 检查点导出为 ONNX。
2. **在 Jetson 上构建并运行**：编译 C++ 运行时，从 ONNX 构建 TensorRT 引擎并运行推理。

## 第 1 部分：在 x86 GPU 主机上导出模型

### 主机要求

- 运行 Ubuntu 22.04 或 24.04 的 x86-64 Linux
- 计算能力 8.0+ 的 NVIDIA Ampere 或更新架构 GPU
- CUDA 12.x 或 13.x
- Python 3.10 及以上
- 足够的 RAM、显存和磁盘空间以容纳所选检查点

模型导出可能需要数倍于检查点大小的主机 RAM 和显存。在迁移到更大或量化模型之前，请先从小型的 Qwen3-0.6B FP16 示例开始。

### 克隆并安装 v0.9.1

```bash
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive

python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install .
```

当你需要检查点量化、LoRA 合并、词表裁剪或分词器辅助工具时，再安装可选工具依赖：

```bash
pip install ".[tools]"
```

验证当前命令行接口：

```bash
tensorrt-edgellm-export --help
tensorrt-edgellm-quantize --help
```

![TensorRT Edge-LLM command verification](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/1.png)

### 将 Qwen3-0.6B 导出为 ONNX

下面的示例直接导出 FP16 检查点。FP16 在 Jetson Orin 上受支持，并且可以让首次验证工作流保持简单。

```bash
export EDGE_LLM_PATH=$HOME/TensorRT-Edge-LLM
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B
export PYTHONPATH=$EDGE_LLM_PATH:$PYTHONPATH

mkdir -p "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

tensorrt-edgellm-export \
  Qwen/Qwen3-0.6B \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx"
```

![Model export workflow](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/2.png)

![Checkpoint processing](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/3.png)

![ONNX export progress](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/4.png)

![Exported model artifacts](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/5.png)

导出的 LLM 计算图应位于：

```text
$WORKSPACE_DIR/Qwen3-0.6B/onnx/llm
```

### 可选：在 Jetson Orin 上使用 INT4 检查点

对于 Orin 设备上的更大模型，请使用在官方支持模型矩阵中标记为 INT4 AWQ 或 INT4 GPTQ 的检查点。预量化检查点可以直接导出。外置 INT4 权重可以在内存受限的 Orin 设备上降低引擎构建时的内存压力。

```bash
tensorrt-edgellm-export \
  /path/to/supported-int4-checkpoint \
  "$WORKSPACE_DIR/<model-name>/onnx" \
  --externalize-weights int4_ffn
```

对于 INT4 MoE 检查点，请添加 TensorRT Edge-LLM 文档中给出的、针对模型家族的外置权重选项。始终在[支持模型矩阵](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html)中核对具体检查点和精度。

### 将 ONNX 目录传输到 Jetson

创建目标目录并复制导出的模型：

```bash
ssh <jetson-user>@<jetson-ip> \
  "mkdir -p ~/tensorrt-edgellm-workspace/$MODEL_NAME"

scp -r \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx" \
  <jetson-user>@<jetson-ip>:~/tensorrt-edgellm-workspace/$MODEL_NAME/
```

## 第 2 部分：在 JetPack 7.2 上构建 TensorRT Edge-LLM

下面的主要工作流以 Jetson Orin 为目标。后文将给出 Jetson Thor 的配置。

### 验证 JetPack 7.2

在 Jetson 设备上，检查 Jetson Linux 发行版、CUDA 编译器和 TensorRT 软件包：

```bash
cat /etc/nv_tegra_release
nvcc --version
dpkg -l | grep -E 'tensorrt|libnvinfer'
```

对于 v0.9.1 的 JetPack 7.2 构建矩阵，`nvcc --version` 应与构建配置所需的 CUDA 13.2 工具链匹配。

### 安装构建依赖

```bash
sudo apt update
sudo apt install -y cmake build-essential git
```

### 在 Jetson 上克隆匹配的发行版

主机导出和目标运行时请使用相同的 TensorRT Edge-LLM 发行版：

```bash
cd ~
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive
```

### 为 Jetson Orin 配置并构建

```bash
cd ~/TensorRT-Edge-LLM
mkdir -p build
cd build

cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-orin \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL

cmake --build . -j"$(nproc)"
```

已启用 CuTe DSL 内核，因为当前 Qwen3.5 和其他受支持的模型路径需要它们。

验证示例是否已构建：

```bash
./examples/llm/llm_build --help
./examples/llm/llm_inference --help
```

### Jetson Thor 构建变体

在搭载 JetPack 7.2 的 Jetson Thor 上，使用相同的构建步骤，但更改嵌入式目标：

```bash
cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-thor \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL
```

## 构建 TensorRT 引擎

在 Jetson 设备上，设置工作区并从导出的 ONNX 计算图构建引擎：

```bash
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B

cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_build \
  --onnxDir "$WORKSPACE_DIR/$MODEL_NAME/onnx/llm" \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --maxBatchSize 1 \
  --maxInputLen 1024 \
  --maxKVCacheCapacity 4096
```

![TensorRT engine build](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

![Engine build completed](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png)

引擎构建时间和峰值内存取决于模型、精度、最大输入长度、KV 缓存容量以及 Jetson 的内存配置。

## 运行 C++ 推理

创建一个请求文件：

```bash
cat > "$WORKSPACE_DIR/input.json" <<'EOF'
{
  "batch_size": 1,
  "temperature": 1.0,
  "top_p": 1.0,
  "top_k": 50,
  "max_generate_length": 128,
  "requests": [
    {
      "messages": [
        {
          "role": "user",
          "content": "What is the capital of the United States?"
        }
      ]
    }
  ]
}
EOF
```

运行推理：

```bash
cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_inference \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --inputFile "$WORKSPACE_DIR/input.json" \
  --outputFile "$WORKSPACE_DIR/output.json"
```

查看结果：

```bash
cat "$WORKSPACE_DIR/output.json"
```

响应中应包含类似如下的生成文本：

```json
{
  "responses": [
    {
      "output_text": "The capital of the United States is Washington, D.C.",
      "request_idx": 0,
      "batch_idx": 0
    }
  ]
}
```

![TensorRT Edge-LLM inference](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/8.png)

![Inference output](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/9.png)

## 对引擎进行基准测试

使用 `llm_bench` 进行预填充和解码的合成测量：

```bash
./build/examples/llm/llm_bench \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --mode prefill
```

在比较 JetPack 6.2 和 JetPack 7.2 时记录以下数值：

- 引擎构建期间的系统峰值内存
- 引擎加载后的内存占用
- 首个 token 的生成时间
- 提示处理吞吐量
- 解码吞吐量
- GPU 频率、电源模式、温度和整板功耗

## 与 JetPack 6.2 工作流的差异

| 项目 | JetPack 6.2 兼容路径 | JetPack 7.2 支持路径 |
| --- | --- | --- |
| Jetson Orin 状态 | 兼容 | 官方支持并经过测试 |
| CUDA 构建值 | `12.6` | `13.2` |
| CMake 目标 | `jetson-orin` | `jetson-orin` |
| Orin 上的运行时精度 | FP16, INT8, INT4 | FP16, INT8, INT4 |
| CuTe DSL | 依赖发行版 | 对当前模型路径使用 `-DENABLE_CUTE_DSL=ALL` 启用 |
| 引擎复用 | 为 JetPack 6.2 重新构建 | 为 JetPack 7.2 重新构建 |

## 故障排查

### CMake 找不到 TensorRT

确认 JetPack 已安装 TensorRT 开发软件包，并且库位于 `/usr` 下：

```bash
dpkg -l | grep -E 'tensorrt|libnvinfer'
ls /usr/include/NvInfer.h
```

### CUDA 版本不匹配

不要仅为了绕过配置检查而更改 `CUDA_CTK_VERSION`。请确认设备正在运行预期的 JetPack 7.2 镜像，并且 `nvcc` 解析到的是该 JetPack 的 CUDA 工具包。

### 引擎构建被终止或内存不足

- 从 Qwen3-0.6B FP16 开始。
- 在 Jetson Orin 上为更大的模型使用受支持的 INT4 检查点。
- 在支持的情况下使用外部化的 INT4 权重。
- 在第一次验证运行时减小 `maxInputLen` 和 `maxKVCacheCapacity`。
- 在构建引擎之前停止无关的容器和占用内存较多的服务。

### 模型或精度被拒绝

查看 [TensorRT Edge-LLM 支持模型矩阵](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html)。模型系列受支持并不意味着每个检查点、精度、视觉编码器或推测解码器组合都在每个平台的 Jetson 上受支持。

## 后续步骤

- 为更大的 Jetson Orin 模型添加 INT4 LLM 工作流。
- 使用受支持的 Qwen-VL、InternVL、Phi 多模态或 Gemma 检查点添加 VLM 推理。
- 评估实验性的高级 Python API 和兼容 OpenAI 的服务器。
- 使用 [Rapid Prototyping on Jetson with NVIDIA Skills](/cn/rapid_prototyping_on_jetson_with_nvidia_skills/) 来自动化设备检查、内存审计和基准测试收集。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
