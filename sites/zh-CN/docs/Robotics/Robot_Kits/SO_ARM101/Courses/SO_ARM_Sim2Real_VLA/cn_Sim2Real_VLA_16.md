---
description: "SO-ARM101 Sim-to-Real VLA 课程第 16 章 —— 在 Jetson 上配置 GR00T 软件环境：工作区路径、验证过的仓库、平台运行时与 Hugging Face 访问。"
title: 第 16 章 - 配置 GR00T 软件环境
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - Isaac GR00T
  - TensorRT
  - 环境
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_16
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 4 · 第 16 章 · Deploy on Jetson</span>
    <h2>16. 配置 GR00T 软件环境</h2>
    <p>
      定义工作区、克隆验证过的部署仓库、安装对应目标的平台运行时——Orin 或
      Thor。
    </p>
    <div className="hero-actions">
      <a href="#target">选定目标</a>
      <a href="#workspace">工作区</a>
      <a href="#repo">仓库</a>
      <a href="#runtime">运行时</a>
      <a href="#verify">验证</a>
    </div>
  </div>
</section>

## 16.1 选定目标

<section id="target" className="section-card">
  <div className="section-title">
    <span>Orin 或 Thor</span>
    <h2>16.1 选定目标</h2>
  </div>

```bash
# Jetson AGX Orin
export GR00T_TARGET=orin

# Jetson AGX Thor
export GR00T_TARGET=thor

tr -d '\0' < /proc/device-tree/model
```

确认 `GR00T_TARGET` 与检测到的板卡一致。

</section>

## 16.2 定义工作区

<section id="workspace" className="section-card">
  <div className="section-title">
    <span>路径</span>
    <h2>16.2 定义工作区</h2>
  </div>

```bash
mkdir -p "${HOME}/.config/gr00t-inference"

cat > "${HOME}/.config/gr00t-inference/paths.sh" <<'EOF_PATHS'
: "${GR00T_TARGET:=orin}"

export GR00T_WORKSPACE="${GR00T_WORKSPACE:-${HOME}/gr00t-inference}"
export GR00T_REPO="${GR00T_REPO:-${GR00T_WORKSPACE}/Isaac-GR00T-Orin-JP72}"
export GR00T_MODEL_PATH="${GR00T_MODEL_PATH:-${GR00T_WORKSPACE}/checkpoints/checkpoint-5000}"
export GR00T_DATASET_PATH="${GR00T_DATASET_PATH:-${GR00T_WORKSPACE}/datasets/so101_vials_real}"
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE_PATH:-${GR00T_WORKSPACE}/models/nvidia/Cosmos-Reason2-2B}"
export GR00T_TRT_OUTPUT="${GR00T_TRT_OUTPUT:-${GR00T_WORKSPACE}/artifacts/${GR00T_TARGET}/so101_trt}"
export GR00T_RESULT_PATH="${GR00T_RESULT_PATH:-${GR00T_WORKSPACE}/results/${GR00T_TARGET}/so101_trt_result.jpeg}"
EOF_PATHS

source "${HOME}/.config/gr00t-inference/paths.sh"
mkdir -p "$(dirname "${GR00T_REPO}")" "${GR00T_MODEL_PATH}" \
  "${GR00T_DATASET_PATH}" "${GR00T_BACKBONE_PATH}" \
  "${GR00T_TRT_OUTPUT}" "$(dirname "${GR00T_RESULT_PATH}")"
```

</section>

## 16.3 克隆验证过的仓库

<section id="repo" className="section-card">
  <div className="section-title">
    <span>固定修订</span>
    <h2>16.3 克隆验证过的仓库</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout dcf5f6b759fd17cab3644a97fc4429bca7451e38
git submodule update --init --recursive
```

</section>

## 16.4 安装平台运行时

<section id="runtime" className="section-card">
  <div className="section-title">
    <span>按目标的 venv</span>
    <h2>16.4 安装平台运行时</h2>
  </div>

### Jetson AGX Orin（JetPack 7.2）

仓库的 Orin 包装脚本会自动创建并激活 `.venv-jp72`，加载 JetPack 7.2 CUDA
运行时路径：

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
```

### Jetson AGX Thor

```bash
source .venv/bin/activate
source scripts/activate_thor.sh
```

</section>

## 16.5 获取 Hugging Face 访问

<section id="hf" className="section-card">
  <div className="section-title">
    <span>先过许可</span>
    <h2>16.5 获取 Hugging Face 访问</h2>
  </div>

GR00T 1.7 官方 backbone 是 `nvidia/Cosmos-Reason2-2B`，需要先接受 NVIDIA
模型许可。

1. 打开 [NVIDIA Cosmos-Reason2-2B](https://huggingface.co/nvidia/Cosmos-Reason2-2B)；
2. 接受许可协议；
3. 在 Jetson 上完成认证：

```bash
uv tool install -U "huggingface_hub[cli]"
hf auth login
```

:::caution 不要提交令牌
不要把 Hugging Face 令牌存进仓库或 shell 脚本。
:::

</section>

## 16.6 验证环境

<section id="verify" className="section-card">
  <div className="section-title">
    <span>自检</span>
    <h2>16.6 验证环境</h2>
  </div>

```bash
cd "${GR00T_REPO}"

python - <<'PY'
import os
import platform
import torch

print("machine:", platform.machine())
print("python:", platform.python_version())
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("target:", os.environ.get("GR00T_TARGET"))
PY
```

输出必须报告 `aarch64`、CUDA 可用的 PyTorch 构建以及预期的目标环境。

下一章：[第 17 章 —— 准备数据集与模型资产](cn_Sim2Real_VLA_17.md)。

</section>

</div>