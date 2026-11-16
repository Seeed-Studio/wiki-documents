---
description: "Chapter 16 of the SO-ARM101 Sim-to-Real VLA Course — configure the GR00T software environment on the Jetson: workspace paths, the validated repository, platform runtimes, and Hugging Face access."
title: Chapter 16 - Configure the GR00T Software Environment
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - Isaac GR00T
  - TensorRT
  - Environment
  - Course
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
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 16 · Deploy on Jetson</span>
    <h2>16. Configure the GR00T Software Environment</h2>
    <p>
      Define the workspace, clone the validated deployment repository, and
      install the platform runtime for your target — Orin or Thor.
    </p>
    <div className="hero-actions">
      <a href="#target">Select target</a>
      <a href="#workspace">Workspace</a>
      <a href="#repo">Repository</a>
      <a href="#runtime">Runtime</a>
      <a href="#verify">Verify</a>
    </div>
  </div>
</section>

## 16.1 Select the Target

<section id="target" className="section-card">
  <div className="section-title">
    <span>Orin or Thor</span>
    <h2>16.1 Select the Target</h2>
  </div>

```bash
# Jetson AGX Orin
export GR00T_TARGET=orin

# Jetson AGX Thor
export GR00T_TARGET=thor

tr -d '\0' < /proc/device-tree/model
```

Confirm that `GR00T_TARGET` matches the detected board.

</section>

## 16.2 Define the Workspace

<section id="workspace" className="section-card">
  <div className="section-title">
    <span>Paths</span>
    <h2>16.2 Define the Workspace</h2>
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

## 16.3 Clone the Validated Repository

<section id="repo" className="section-card">
  <div className="section-title">
    <span>Pinned revision</span>
    <h2>16.3 Clone the Validated Repository</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout dcf5f6b759fd17cab3644a97fc4429bca7451e38
git submodule update --init --recursive
```

</section>

## 16.4 Install the Platform Runtime

<section id="runtime" className="section-card">
  <div className="section-title">
    <span>Per-target venvs</span>
    <h2>16.4 Install the Platform Runtime</h2>
  </div>

### Jetson AGX Orin with JetPack 7.2

The repository's Orin wrapper creates and activates `.venv-jp72` and loads
the JetPack 7.2 CUDA runtime paths automatically:

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
```

### Jetson AGX Thor

```bash
source .venv/bin/activate
source scripts/activate_thor.sh
```

</section>

## 16.5 Obtain Hugging Face Access

<section id="hf" className="section-card">
  <div className="section-title">
    <span>License first</span>
    <h2>16.5 Obtain Hugging Face Access</h2>
  </div>

The official GR00T 1.7 backbone is `nvidia/Cosmos-Reason2-2B` and requires
acceptance of the NVIDIA model license.

1. Open [NVIDIA Cosmos-Reason2-2B](https://huggingface.co/nvidia/Cosmos-Reason2-2B).
2. Accept the license agreement.
3. Authenticate on the Jetson:

```bash
uv tool install -U "huggingface_hub[cli]"
hf auth login
```

:::caution Never commit tokens
Do not store Hugging Face tokens in the repository or shell scripts.
:::

</section>

## 16.6 Verify the Environment

<section id="verify" className="section-card">
  <div className="section-title">
    <span>Sanity check</span>
    <h2>16.6 Verify the Environment</h2>
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

The command must report `aarch64`, a CUDA-enabled PyTorch build, and the
expected target environment.

Next: [Chapter 17 — Prepare the Dataset and Model Assets](Sim2Real_VLA_17.md).

</section>

</div>