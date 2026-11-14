---
description: "Capítulo 16 del curso Sim-to-Real VLA de SO-ARM101 — configurar el entorno GR00T en el Jetson: rutas del workspace, el repositorio validado, runtimes por plataforma y acceso a Hugging Face."
title: Capítulo 16 - Configurar el entorno GR00T
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - Isaac GR00T
  - TensorRT
  - Entorno
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
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 16 · Deploy on Jetson</span>
    <h2>16. Configurar el entorno GR00T</h2>
    <p>
      Define el workspace, clona el repositorio validado de despliegue e
      instala el runtime de tu objetivo — Orin o Thor.
    </p>
    <div className="hero-actions">
      <a href="#target">Elegir objetivo</a>
      <a href="#workspace">Workspace</a>
      <a href="#repo">Repositorio</a>
      <a href="#runtime">Runtime</a>
      <a href="#verify">Verificar</a>
    </div>
  </div>
</section>

## 16.1 Elegir el objetivo

<section id="target" className="section-card">
  <div className="section-title">
    <span>Orin o Thor</span>
    <h2>16.1 Elegir el objetivo</h2>
  </div>

```bash
# Jetson AGX Orin
export GR00T_TARGET=orin

# Jetson AGX Thor
export GR00T_TARGET=thor

tr -d '\0' < /proc/device-tree/model
```

Confirma que `GR00T_TARGET` coincide con la placa detectada.

</section>

## 16.2 Definir el workspace

<section id="workspace" className="section-card">
  <div className="section-title">
    <span>Rutas</span>
    <h2>16.2 Definir el workspace</h2>
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

## 16.3 Clonar el repositorio validado

<section id="repo" className="section-card">
  <div className="section-title">
    <span>Revisión fijada</span>
    <h2>16.3 Clonar el repositorio validado</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout dcf5f6b759fd17cab3644a97fc4429bca7451e38
git submodule update --init --recursive
```

</section>

## 16.4 Instalar el runtime de plataforma

<section id="runtime" className="section-card">
  <div className="section-title">
    <span>Venvs por objetivo</span>
    <h2>16.4 Instalar el runtime de plataforma</h2>
  </div>

### Jetson AGX Orin con JetPack 7.2

El wrapper de Orin del repositorio crea y activa `.venv-jp72` y carga las
rutas del runtime CUDA de JetPack 7.2 automáticamente:

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
```

### Jetson AGX Thor

```bash
source .venv/bin/activate
source scripts/activate_thor.sh
```

</section>

## 16.5 Obtener acceso a Hugging Face

<section id="hf" className="section-card">
  <div className="section-title">
    <span>Primero la licencia</span>
    <h2>16.5 Obtener acceso a Hugging Face</h2>
  </div>

El backbone oficial de GR00T 1.7 es `nvidia/Cosmos-Reason2-2B` y exige
aceptar la licencia del modelo de NVIDIA.

1. Abre [NVIDIA Cosmos-Reason2-2B](https://huggingface.co/nvidia/Cosmos-Reason2-2B).
2. Acepta el acuerdo de licencia.
3. Autentícate en el Jetson:

```bash
uv tool install -U "huggingface_hub[cli]"
hf auth login
```

:::caution No guardes tokens en el repo
No almacenes tokens de Hugging Face en el repositorio ni en scripts de
shell.
:::

</section>

## 16.6 Verificar el entorno

<section id="verify" className="section-card">
  <div className="section-title">
    <span>Comprobación rápida</span>
    <h2>16.6 Verificar el entorno</h2>
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

La salida debe informar `aarch64`, un build de PyTorch con CUDA y el
entorno de objetivo esperado.

Siguiente: [Capítulo 17 — Preparar dataset y activos del modelo](es_Sim2Real_VLA_17.md).

</section>

</div>