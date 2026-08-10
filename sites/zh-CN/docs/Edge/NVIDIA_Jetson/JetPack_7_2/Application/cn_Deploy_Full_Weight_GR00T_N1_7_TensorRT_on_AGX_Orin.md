---
description: 在 JetPack 7.2 的 Jetson AGX Orin 上，将微调后的全权重 NVIDIA Isaac GR00T N1.7 策略部署为由七个引擎组成的 TensorRT 推理流水线。
title: 在 JetPack 7.2 和 Jetson AGX Orin 上使用 TensorRT 部署全权重 GR00T N1.7
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# 在 JetPack 7.2 和 Jetson AGX Orin 上使用 TensorRT 部署全权重 GR00T N1.7

本教程在 **JetPack 7.2** 的 **Jetson AGX Orin** 上，使用完整的 TensorRT 推理流水线部署一个微调后的 **NVIDIA Isaac GR00T N1.7** 策略。与旧的 Orin 工作流仅加速 DiT 组件不同，本实现会为全部七个模型组件构建 TensorRT 引擎：

1. Vision Transformer (ViT)
2. Large Language Model (LLM)
3. 视觉-语言自注意力
4. 状态编码器
5. 动作编码器
6. DiT 动作专家
7. 动作解码器

经验证的工作流使用本地 LeRobot 数据集进行离线推理。它不会打开机器人串口或发送执行器指令，因此适合在集成实体机器人之前，用于检查模型转换和动作生成。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png" alt="GR00T N1.7 full TensorRT deployment on Jetson AGX Orin" />
</div>

## 项目仓库

JetPack 7.2 的实现、转换脚本、运行时改动以及原始部署说明可在以下仓库中获取：

- [jjjadand/Isaac-GR00T-Orin-JP72](https://github.com/jjjadand/Isaac-GR00T-Orin-JP72)

本指南基于以下仓库提交版本进行验证：

```text
93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

后续提交可能会改进软件包版本或命令行选项。若要复现文中测得的结果，请从固定的提交版本开始，并单独审阅之后的更改。

## 测试过的配置

| 项目 | 测试值 |
| --- | --- |
| 设备 | Jetson AGX Orin，计算能力 `sm_87` |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| 操作系统 / 内核 | Ubuntu 24.04 / Linux 6.8 Tegra |
| 系统 CUDA | CUDA 13.2 |
| 系统 TensorRT | 10.16.2.10 |
| Python | 3.12.3 |
| PyTorch | 2.8.0，Jetson AI Lab CUDA 12.9 wheel |
| TorchVision | 0.23.0 |
| Transformers | 4.57.6 |
| ONNX | 1.20.1 |
| PyAV / FFmpeg | PyAV 16.1.0 / FFmpeg 8 |
| TensorRT batch size | 1 |
| 动作视界 | 16 |

:::warning
仓库中较早的 Orin 配置面向 JetPack 6.2、Python 3.10、CUDA 12.6 和更早版本的 TensorRT。对于本 JetPack 7.2 工作流，请不要运行 `scripts/deployment/orin/install_deps.sh` 或 `scripts/activate_orin.sh`。
:::

:::note
经验证环境中使用的 PyTorch wheel 自带 CUDA 12.9 运行时。TensorRT 仍然使用 JetPack 7.2 提供的系统 CUDA 13.2 安装。请保持本指南中展示的激活顺序和库路径顺序。
:::

## 存储与内存规划

为仓库、检查点、本地 VLM 主干、数据集、ONNX 计算图、TensorRT 引擎以及临时构建文件预留至少 **45–50 GB** 的可用存储空间。经验证的 TensorRT 构建产物目录大约占用 **13 GB**。

测试中的 AGX Orin 暴露了约 29 GB 可用统一内存，且未使用交换分区。在构建引擎之前：

```bash
free -h
df -h "${HOME}"
sudo tegrastats
```

如果 TensorRT 构建器被内存不足杀死，请关闭浏览器、笔记本、桌面应用以及无关的模型服务。

## 1. 定义可移植路径

项目的 README 记录的是原始测试机器上的路径。与其复制特定机器的绝对路径，不如在你自己的 home 目录下创建一个可复用的配置：

```bash
mkdir -p "${HOME}/.config/gr00t-jp72"

cat > "${HOME}/.config/gr00t-jp72/paths.sh" <<'EOF'
export GR00T_WORKSPACE="${HOME}/gr00t-jp72"
export GR00T_REPO="${GR00T_WORKSPACE}/Isaac-GR00T-Orin-JP72"
export GR00T_CHECKPOINT="${GR00T_WORKSPACE}/checkpoints/checkpoint-10000"
export GR00T_DATASET="${GR00T_WORKSPACE}/datasets/grab_tube_0_eval"
export GR00T_BACKBONE="${GR00T_WORKSPACE}/models/Qwen/Qwen3-VL-2B-Instruct"
export GR00T_TRT_OUTPUT="${GR00T_WORKSPACE}/artifacts/rebot_trt"
EOF

source "${HOME}/.config/gr00t-jp72/paths.sh"
mkdir -p \
  "$(dirname "${GR00T_REPO}")" \
  "$(dirname "${GR00T_CHECKPOINT}")" \
  "$(dirname "${GR00T_DATASET}")" \
  "$(dirname "${GR00T_BACKBONE}")" \
  "${GR00T_TRT_OUTPUT}"
```

在每个新终端中使用这些变量之前，运行以下命令：

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
```

你可以修改 `paths.sh` 中的值，将大文件放到 NVMe SSD 上。请保持仓库、模型、数据集和输出路径彼此分离。

## 2. 克隆 JetPack 7.2 仓库

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout 93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

如果仓库已经存在，请确认其当前修订版本：

```bash
git -C "${GR00T_REPO}" rev-parse HEAD
git -C "${GR00T_REPO}" status --short
```

在 ONNX 导出或引擎构建进行过程中，请不要切换提交版本。

## 3. 准备所需输入

### 3.1 微调后的 GR00T N1.7 检查点

将你的微调检查点复制到 `${GR00T_CHECKPOINT}` 中。推理检查点需要 GR00T 配置、统计信息和模型分片。一个典型的目录结构如下：

```text
checkpoint-10000/
├── config.json
├── embodiment_id.json
├── model-00001-of-00003.safetensors
├── model-00002-of-00003.safetensors
├── model-00003-of-00003.safetensors
├── model.safetensors.index.json
├── processor_config.json
└── statistics.json
```

诸如 `optimizer.pt`、`scheduler.pt` 和 `trainer_state.json` 之类的训练状态文件，在推理或 ONNX 导出时并不需要。

验证配置的路径：

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
test -f "${GR00T_CHECKPOINT}/config.json"
test -f "${GR00T_CHECKPOINT}/processor_config.json"
test -f "${GR00T_CHECKPOINT}/statistics.json"
```

### 3.2 下载本地 Qwen3-VL 主干

N1.7 策略仍然需要兼容的主干架构、分词器和图像处理器。该仓库通过 `GR00T_BACKBONE_PATH` 支持完全本地的主干，因此在导出或推理期间不需要 Hugging Face 登录。

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

uv tool run --from modelscope modelscope download \
  Qwen/Qwen3-VL-2B-Instruct \
  --local-dir "${GR00T_BACKBONE}"
```

确认主模型文件和配置已就绪：

```bash
test -f "${GR00T_BACKBONE}/config.json"
test -f "${GR00T_BACKBONE}/model.safetensors"
ls -lh "${GR00T_BACKBONE}/model.safetensors"
```

在测试下载中，`model.safetensors` 文件大小约为 4.25 GB。

### 3.3 准备本地 LeRobot 数据集

离线干跑测试通过 `--dataset-path` 接受本地 LeRobot v2/v2.1 数据集。对于经验证的 RS-Rebot 示例，最小目录结构为：

```text
grab_tube_0_eval/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
├── videos/chunk-000/observation.images.side/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

给定示例期望：

- embodiment 标签：`NEW_EMBODIMENT`；
- 相机键：`front` 和 `side`；
- 状态和动作维度：7；
- 动作视界：16。

检查点中的 `processor_config.json` 与数据集中的 `meta/modality.json` 必须对状态、动作和视频模态给出兼容的描述。

:::tip
使用 `--dataset-path` 传入本地目录。不要把本地文件夹传给期望 Hugging Face 仓库 ID 的选项，否则可能触发不必要的 Hub 请求并返回 HTTP 401 错误。
:::

## 4. 安装 JetPack 7.2 环境

### 4.1 安装系统软件包

JetPack 7.2 必须已经提供 CUDA、TensorRT、cuDNN 以及 TensorRT 的 Python 绑定。

```bash
sudo apt-get update
sudo apt-get install -y --no-install-recommends \
  ffmpeg \
  libopenblas0-pthread \
  python3.12-venv \
  python3-dev
```

检查平台软件包：

```bash
cat /etc/nv_tegra_release
/usr/local/cuda-13.2/bin/nvcc --version
dpkg-query -W python3-libnvinfer libnvinfer10 tensorrt
```

经验证环境报告为 L4T R39.2、CUDA 13.2 和 TensorRT 10.16。

### 4.2 创建专用 Python 环境

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="${HOME}/.local/bin:${PATH}"

uv venv --python /usr/bin/python3.12 .venv-jp72
```

不要复用仓库中的 `.venv`，其中可能包含为其他 Jetson 平台构建的软件包。

### 4.3 安装测试过的 Orin PyTorch 轮子

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/f36/0db283b1249b3/torch-2.8.0-cp312-cp312-linux_aarch64.whl" \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/255/341cb5beb4673/torchvision-0.23.0-cp312-cp312-linux_aarch64.whl"
```

安装 PyTorch wheel 所需的 CUDA 12.9 运行时库：

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  nvidia-cublas-cu12==12.9.2.10 \
  nvidia-cuda-cupti-cu12==12.9.79 \
  nvidia-cuda-nvrtc-cu12==12.9.86 \
  nvidia-cuda-runtime-cu12==12.9.79 \
  nvidia-cufft-cu12==11.4.1.4 \
  nvidia-curand-cu12==10.3.10.19 \
  nvidia-cusolver-cu12==11.7.5.82 \
  nvidia-cusparse-cu12==12.5.10.65 \
  nvidia-nvjitlink-cu12==12.9.86
```

### 4.4 安装 GR00T 依赖

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  accelerate==1.12.0 \
  albumentations==1.4.18 \
  av==16.1.0 \
  build==1.4.0 \
  click==8.1.8 \
  cryptography==46.0.7 \
  datasets==3.6.0 \
  dm-tree==0.1.8 \
  einops==0.8.1 \
  gitpython==3.1.50 \
  gymnasium==1.2.2 \
  "huggingface-hub[cli]==0.36.2" \
  jsonlines==4.0.0 \
  lmdb==1.7.5 \
  matplotlib==3.10.1 \
  msgpack==1.1.0 \
  msgpack-numpy==0.4.8 \
  numpy==1.26.4 \
  omegaconf==2.3.0 \
  onnx==1.20.1 \
  onnxscript==0.6.2 \
  opencv-python-headless==4.11.0.86 \
  pandas==2.2.3 \
  peft==0.17.1 \
  pytest==9.0.3 \
  pytest-timeout==2.4.0 \
  pyzmq==27.0.1 \
  ruff==0.15.1 \
  safetensors==0.7.0 \
  scipy==1.15.3 \
  termcolor==3.2.0 \
  transformers==4.57.6 \
  tyro==0.9.17 \
  wandb==0.23.0

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/c46/66317287eb28a/diffusers-0.36.0.dev0-py3-none-any.whl"

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps -e "${GR00T_REPO}"
```

在此经过测试的配置中不要安装 TorchCodec。使用 PyAV 16 配合 JetPack 7.2 的 FFmpeg 8 来解码数据集视频。Flash Attention 是可选的，并未在验证环境中安装。

### 4.5 暴露系统 TensorRT Python 包

使用 Python 来确定环境实际的 `site-packages` 路径，而不是硬编码用户名：

```bash
GR00T_SITE_PACKAGES="$("${GR00T_REPO}/.venv-jp72/bin/python" -c 'import site; print(site.getsitepackages()[0])')"

printf '%s\n' '/usr/lib/python3.12/dist-packages' \
  > "${GR00T_SITE_PACKAGES}/jetpack_system_packages.pth"
```

## 5. 激活并验证

在每个新的 shell 中运行以下代码块：

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

deactivate 2>/dev/null || true
source .venv-jp72/bin/activate
source scripts/activate_orin_jp72.sh

# Override the original test-machine path configured by the activation script.
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
hash -r
```

验证解释器、GPU 架构、TensorRT 绑定、backbone 和视频后端：

```bash
python - <<'PY'
import os
import sys

import tensorrt
import torch

print("python:", sys.executable)
print("torch:", torch.__version__)
print("torch CUDA:", torch.version.cuda)
print("GPU:", torch.cuda.get_device_name(0))
print("architectures:", torch.cuda.get_arch_list())
print("TensorRT:", tensorrt.__version__)
print("backbone:", os.environ["GR00T_BACKBONE_PATH"])
print("video backend:", os.environ["GR00T_VIDEO_BACKEND"])

assert sys.executable.endswith("/.venv-jp72/bin/python")
assert "sm_87" in torch.cuda.get_arch_list()
assert os.environ["GR00T_VIDEO_BACKEND"] == "pyav"
PY
```

预期的关键值包括 PyTorch 2.8.0、PyTorch CUDA 12.9、`sm_87`、TensorRT 10.16.2.10，以及 `pyav` 后端。

:::warning
请使用已激活环境中的普通 `python` 命令。安装完成后避免使用 `uv run python`，因为它可能会同步仓库的默认项目环境并替换可用的 Jetson 专用软件包。
:::

## 6. 运行 PyTorch 冒烟测试

在导出之前，先验证 checkpoint、本地 backbone、数据集、视频解码器和 CUDA 前向传播能协同工作：

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 1 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --inference-mode pytorch \
  --save-plot-path /tmp/rebot_pytorch_smoke.jpeg
```

在该命令能够加载一个数据集观测并生成一个动作预测之前，不要继续进行 TensorRT 导出。

## 7. 将完整模型导出为 ONNX

以静态 batch size 为 1 导出全部七个组件：

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps export
```

经验证的导出大约需要两分钟。确认 ONNX 目录中包含七个计算图和导出元数据：

```bash
find "${GR00T_TRT_OUTPUT}/onnx" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

保持 `dit_bf16.onnx.data` 与 `dit_bf16.onnx` 放在一起；它包含 DiT 计算图使用的外部张量数据。

## 8. 构建七个 TensorRT 引擎

在目标 AGX Orin 上构建引擎。TensorRT 引擎与 GPU 架构、TensorRT 版本、计算图形状和 batch size 绑定。

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps build
```

经验证的构建大约耗时 3 分 37 秒，并生成：

```text
action_decoder.engine
action_encoder.engine
dit_bf16.engine
llm_bf16.engine
state_encoder.engine
vit.engine
vl_self_attention.engine
```

验证引擎目录：

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

在更改 checkpoint、输入相机布局或分辨率、动作视界、batch size、GPU、CUDA/TensorRT 安装或 ONNX 计算图后，请重新构建。

## 9. 对比验证 TensorRT 与 PyTorch

运行仓库中的数值验证阶段：

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps verify
```

经验证的运行结果为：

| 对比项 | 余弦相似度 |
| --- | ---: |
| ViT 输出 | 0.995977 |
| Backbone 输出 | 0.999958 |
| 最终动作 | 0.997426 |
| 验证状态 | 通过 |

将这些数值视为复现参考。不同的微调 checkpoint、数据集样本或依赖版本可能会产生略有差异的数值。

## 10. 运行全 TensorRT 离线推理

以下命令会加载轨迹 0，并预测两个 16 动作块。它不会初始化 RS-Rebot 硬件运行器。

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 32 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --skip-timing-steps 1 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --save-plot-path /tmp/rebot_trt_result.jpeg
```

一次成功的运行会包含类似如下的信息：

```text
N1.7 full-pipeline TRT engines loaded.
  ViT: TRT | LLM: TRT | Action Head: TRT
All inference steps completed for current trajectory-id 0
pred_action_joints vs time (32, 7)
Done
```

经验证的热身后推理时间为**每个 16 动作预测块 0.2755 秒**，约为**每秒 3.63 个块**。该结果适用于经过测试的 checkpoint、数据集形状、引擎配置和 AGX Orin 的运行条件。

脚本中的 MSE 和 MAE 数值是将模型预测与记录的数据集动作进行比较。它们不是 TensorRT 转换误差指标；如需比较 PyTorch 与 TensorRT 的一致性，请使用余弦验证阶段。

### 全 TensorRT 推理演示

下方视频演示了在 JetPack 7.2 和 Jetson AGX Orin 上运行的完整 GR00T N1.7 TensorRT 工作流。

<div className="video-container">
  <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/H3rQHnB-gaI"
    title="GR00T N1.7 full TensorRT inference on JetPack 7.2 and Jetson AGX Orin"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

## 11. 安全警告

### 来自 TorchVision 的 `libnvjpeg.so.12`

经过测试的数据集路径使用 PyAV 和 FFmpeg，而不是 `torchvision.io`。该警告不会阻塞已验证的推理工作流。

### `flash_attn is not installed`

参考 PyTorch 模型在加载和导出期间使用 SDPA。完整流水线推理会用 TensorRT 引擎替换 ViT、LLM 和动作组件。

### `lm_head.weight` is newly initialized

GR00T 消耗的是 backbone 的隐藏状态，而不是语言生成头。微调后的策略 checkpoint 提供了动作推理所使用的权重。

## 12. 故障排查

### `torch._C` has no `_dlpack_exchange_api`

当前激活的是错误的环境。检查解释器：

```bash
which python
python -c "import sys; print(sys.executable)"
```

路径必须以 `${GR00T_REPO}/.venv-jp72/bin/python` 结尾。重新激活环境并再次运行 `source scripts/activate_orin_jp72.sh`。

### Hugging Face HTTP 401

确认在仓库激活脚本之后应用了本地 backbone 覆盖：

```bash
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
export HF_HUB_OFFLINE=1
export TRANSFORMERS_OFFLINE=1

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors"
```

### TorchCodec 或 FFmpeg 导入失败

确认已选择 PyAV：

```bash
python -c "import os, av; print(os.environ['GR00T_VIDEO_BACKEND'], av.__version__)"
```

预期输出以 `pyav 16.1.0` 开头。

### 引擎形状或反序列化错误

不要从其他 GPU 或 TensorRT 安装中拷贝引擎。检查 `export_metadata.json` 是否与引擎输出一同存在，并在目标设备上重新构建 ONNX 和 TensorRT 工件。

### TensorRT 构建内存不足

1. 关闭无关的 GPU 应用和模型服务。
2. 保持 `--workspace 4096`，而不是立刻增大它。
3. 顺序执行各个构建阶段。
4. 使用 `df -h`、`free -h` 和 `tegrastats` 确认有足够的存储和内存。
5. 如果在多次构建失败后内存仍然碎片化，请重启进入一个干净会话。

## 13. 向机器人控制迈进

经验证的命令有意设计为离线空跑测试。在连接实体机器人之前：

1. 在已录制的回合上比较 TensorRT 与 PyTorch 的动作轨迹；
2. 确认关节顺序、单位、缩放、限制和具身化元数据；
3. 将所有生成的指令钳制在安全的关节和速度限制内；
4. 实现急停、指令超时和陈旧观测检测；
5. 在执行器断电或空载的情况下进行测试；
6. 从低速、短视界动作开始；
7. 记录延迟、内存、功耗、温度和任务成功率。

在没有硬件特定安全层的情况下，不要将离线命令直接复用为机器人控制器。

## 复现检查清单

- [ ] 已安装 JetPack 7.2 / L4T R39.2。
- [ ] CUDA 13.2 和 TensorRT 10.16 可见。
- [ ] 仓库已按文档指定的修订版本克隆。
- [ ] `.venv-jp72` 使用 Python 3.12 和 Orin 的 `sm_87` PyTorch wheel。
- [ ] 本地 Qwen3-VL backbone 在没有 Hub 请求的情况下可以加载。
- [ ] checkpoint 与 LeRobot 数据集模态匹配。
- [ ] PyTorch 冒烟测试通过。
- [ ] 已导出七个 ONNX 计算图。
- [ ] 已在目标 Orin 上生成七个 TensorRT 引擎。
- [ ] 数值验证报告通过。
- [ ] 离线全 TensorRT 推理完成并保存图表。

## 相关资源

- [JetPack 7.2 资源中心](/cn/jetpack_7_2_resource_hub/)
- [JetPack 7.2 内存优化](/cn/jetpack_7_2_memory_optimization/)
- [在 JetPack 7.2 上部署 TensorRT Edge-LLM](/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [为 reBot Arm 微调 GR00T N1.7 并部署到 Jetson Thor](/cn/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [JetPack 7.2 深度解析](/cn/jetpack72_deep_dive_bk/)

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
