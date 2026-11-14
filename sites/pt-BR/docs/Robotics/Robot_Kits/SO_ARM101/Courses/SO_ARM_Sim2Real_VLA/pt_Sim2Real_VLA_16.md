---
description: "Capítulo 16 do curso Sim-to-Real VLA do SO-ARM101 — configurar o ambiente GR00T no Jetson: caminhos do workspace, o repositório validado, runtimes por plataforma e acesso ao Hugging Face."
title: Capítulo 16 - Configurar o ambiente GR00T
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - Isaac GR00T
  - TensorRT
  - Ambiente
  - Curso
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
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 16 · Deploy on Jetson</span>
    <h2>16. Configurar o ambiente GR00T</h2>
    <p>
      Defina o workspace, clone o repositório validado de deploy e instale
      o runtime da sua plataforma — Orin ou Thor.
    </p>
    <div className="hero-actions">
      <a href="#target">Escolher alvo</a>
      <a href="#workspace">Workspace</a>
      <a href="#repo">Repositório</a>
      <a href="#runtime">Runtime</a>
      <a href="#verify">Verificar</a>
    </div>
  </div>
</section>

## 16.1 Escolher o alvo

<section id="target" className="section-card">
  <div className="section-title">
    <span>Orin ou Thor</span>
    <h2>16.1 Escolher o alvo</h2>
  </div>

```bash
# Jetson AGX Orin
export GR00T_TARGET=orin

# Jetson AGX Thor
export GR00T_TARGET=thor

tr -d '\0' < /proc/device-tree/model
```

Confirme que `GR00T_TARGET` corresponde à placa detectada.

</section>

## 16.2 Definir o workspace

<section id="workspace" className="section-card">
  <div className="section-title">
    <span>Caminhos</span>
    <h2>16.2 Definir o workspace</h2>
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

## 16.3 Clonar o repositório validado

<section id="repo" className="section-card">
  <div className="section-title">
    <span>Revisão fixada</span>
    <h2>16.3 Clonar o repositório validado</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout dcf5f6b759fd17cab3644a97fc4429bca7451e38
git submodule update --init --recursive
```

</section>

## 16.4 Instalar o runtime da plataforma

<section id="runtime" className="section-card">
  <div className="section-title">
    <span>Venvs por alvo</span>
    <h2>16.4 Instalar o runtime da plataforma</h2>
  </div>

### Jetson AGX Orin com JetPack 7.2

O wrapper de Orin do repositório cria e ativa `.venv-jp72` e carrega os
caminhos do runtime CUDA do JetPack 7.2 automaticamente:

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
```

### Jetson AGX Thor

```bash
source .venv/bin/activate
source scripts/activate_thor.sh
```

</section>

## 16.5 Obter acesso ao Hugging Face

<section id="hf" className="section-card">
  <div className="section-title">
    <span>Primeiro a licença</span>
    <h2>16.5 Obter acesso ao Hugging Face</h2>
  </div>

O backbone oficial do GR00T 1.7 é o `nvidia/Cosmos-Reason2-2B` e exige
aceitar a licença do modelo da NVIDIA.

1. Abra [NVIDIA Cosmos-Reason2-2B](https://huggingface.co/nvidia/Cosmos-Reason2-2B).
2. Aceite o contrato de licença.
3. Autentique no Jetson:

```bash
uv tool install -U "huggingface_hub[cli]"
hf auth login
```

:::caution Não comite tokens
Não armazene tokens do Hugging Face no repositório nem em scripts de shell.
:::

</section>

## 16.6 Verificar o ambiente

<section id="verify" className="section-card">
  <div className="section-title">
    <span>Checagem rápida</span>
    <h2>16.6 Verificar o ambiente</h2>
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

A saída deve informar `aarch64`, um build de PyTorch com CUDA e o ambiente
do alvo esperado.

Próximo: [Capítulo 17 — Preparar dataset e ativos do modelo](pt_Sim2Real_VLA_17.md).

</section>

</div>