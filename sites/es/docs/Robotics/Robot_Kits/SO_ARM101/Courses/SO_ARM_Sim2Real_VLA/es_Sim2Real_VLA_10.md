---
description: "Capítulo 10 del curso Sim-to-Real VLA de SO-ARM101 — entrenar la política GR00T N1.7: instalar Isaac-GR00T, convertir el dataset a v2, registrar la configuración de modalidad SO-101 y hacer fine-tuning."
title: Capítulo 10 - Entrenar la política GR00T N1.7
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac GR00T
  - GR00T N1.7
  - VLA
  - Fine-tuning
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_10
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 10 · Get Your Own VLA Model</span>
    <h2>10. Entrenar la política GR00T N1.7</h2>
    <p>
      Entiende Isaac GR00T N1.7, prepara el dataset SO-101 para él y ajusta
      (fine-tune) un modelo VLA específico de tarea con los datos del
      capítulo 9.
    </p>
    <div className="hero-actions">
      <a href="#groot">GR00T N1.7</a>
      <a href="#env">Entorno</a>
      <a href="#dataset">Dataset</a>
      <a href="#config">Configuración</a>
      <a href="#finetune">Fine-tuning</a>
      <a href="#outputs">Salidas</a>
    </div>
  </div>
</section>

## 10.1 NVIDIA Isaac GR00T N1.7

<section id="groot" className="section-card">
  <div className="section-title">
    <span>El modelo VLA</span>
    <h2>10.1 NVIDIA Isaac GR00T N1.7</h2>
  </div>

NVIDIA Isaac GR00T N1.7 es un modelo Vision-Language-Action (VLA) abierto
de habilidades robóticas generalizadas. Este modelo multi-plataforma
recibe entradas multimodales — lenguaje e imágenes — para ejecutar tareas
de manipulación en entornos diversos.

El modelo se entrena una vez y se adapta a cada plataforma mediante
*configuraciones de modalidad*: un archivo pequeño que indica a GR00T qué
columnas del dataset son el brazo, la pinza, las cámaras y la instrucción
de lenguaje. Este capítulo construye exactamente esa configuración para el
SO-ARM101.

Referencias:

- [Repositorio del modelo GR00T-1.7-3B en Hugging Face](https://huggingface.co/nvidia/GR00T-1.7-3B/tree/main)
- [Repositorio GitHub de NVIDIA Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T/tree/main)

</section>

## 10.2 Preparar el entorno Python

<section id="env" className="section-card">
  <div className="section-title">
    <span>Isaac-GR00T</span>
    <h2>10.2 Preparar el entorno Python</h2>
  </div>

```bash
sudo apt install git-lfs && git lfs install
cd ~
git clone --recurse-submodules https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
sudo apt-get update && sudo apt-get install -y ffmpeg
uv sync --python 3.12
```

:::caution Hardware
El fine-tuning del modelo de 3B necesita una GPU clase RTX 5090 / RTX 6000
(la base del workshop de NVIDIA). Una GPU de portátil de 8 GB no basta para
este capítulo; la comprobación ACT del final sí corre en GPUs pequeñas.
:::

</section>

## 10.3 Tratamiento del dataset

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v3 → v2</span>
    <h2>10.3 Tratamiento del dataset</h2>
  </div>

LeRobot escribe dataset v3; el fine-tuning de GR00T N1.7 lee el layout v2
antiguo. Convierte el dataset grabado en el capítulo 9:

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

El conversor aparta la copia v3 como `so101_vials_real_V30` y deja el
dataset v2 en la ruta original. Si luego vas a mezclar episodios
simulados (capítulo 13), haz la mezcla **antes** de convertir.

Después añade `meta/modality.json` dentro del dataset convertido:

```json
{
  "state": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "action": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "video": {
    "wrist": { "original_key": "observation.images.front" },
    "front": { "original_key": "observation.images.external" }
  },
  "annotation": {
    "human.task_description": { "original_key": "task_index" }
  }
}
```

Por qué la división termina en 5:

| Dimensiones | Significado |
| --- | --- |
| 0–4 | `shoulder_pan`, `shoulder_lift`, `elbow_flex`, `wrist_flex`, `wrist_roll` |
| 5 | `gripper` |

El SO-ARM101 tiene cinco articulaciones de brazo más pinza — seis valores
en total. El curso de reBot usa siete: no copies su `end: 6`.

El mapeo de cámaras también es deliberado:

| Característica del dataset | Cámara física | Entrada GR00T |
| --- | --- | --- |
| `observation.images.front` | Cámara de muñeca / pinza | `wrist` |
| `observation.images.external` | Cámara cenital | `front` |

</section>

## 10.4 Registrar la configuración de modalidad SO-101

<section id="config" className="section-card">
  <div className="section-title">
    <span>Configuración de plataforma</span>
    <h2>10.4 Registrar la configuración de modalidad SO-101</h2>
  </div>

```bash
cd ~/Isaac-GR00T
mkdir -p examples/so101
```

Crea `examples/so101/so101_config.py`:

```python
# SPDX-License-Identifier: Apache-2.0

from gr00t.configs.data.embodiment_configs import register_modality_config
from gr00t.data.embodiment_tags import EmbodimentTag
from gr00t.data.types import (
    ActionConfig,
    ActionFormat,
    ActionRepresentation,
    ActionType,
    ModalityConfig,
)

so101_config = {
    # Fotograma actual de ambas cámaras; claves acordes a meta/modality.json
    "video": ModalityConfig(
        delta_indices=[0],
        modality_keys=["wrist", "front"],
    ),
    # Lectura articular actual
    "state": ModalityConfig(
        delta_indices=[0],
        modality_keys=["single_arm", "gripper"],
    ),
    # Predecir 16 pasos futuros
    "action": ModalityConfig(
        delta_indices=list(range(0, 16)),
        modality_keys=["single_arm", "gripper"],
        action_configs=[
            # Brazo: deltas relativos generalizan mejor entre poses
            ActionConfig(
                rep=ActionRepresentation.RELATIVE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
            # Pinza: objetivo absoluto funciona mejor para abrir/cerrar
            ActionConfig(
                rep=ActionRepresentation.ABSOLUTE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
        ],
    ),
    "language": ModalityConfig(
        delta_indices=[0],
        modality_keys=["annotation.human.task_description"],
    ),
}

register_modality_config(so101_config, embodiment_tag=EmbodimentTag.NEW_EMBODIMENT)
```

</section>

## 10.5 Hacer fine-tuning de GR00T N1.7

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>Horas de GPU</span>
    <h2>10.5 Hacer fine-tuning de GR00T N1.7</h2>
  </div>

**Ruta A — tu dataset real** (la ruta por defecto del curso):

```bash
cd ~/Isaac-GR00T
export SAVE_STEPS=5000
bash examples/finetune.sh \
  --base-model-path nvidia/GR00T-1.7-3B \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_real
```

**Ruta B — co-entrenamiento con episodios simulados.** Mezcla primero los
datasets (capítulo 13) y apunta `--dataset-path` al conjunto mezclado. La
receta del workshop de NVIDIA: pocos episodios reales más 70–100
simulados.

**Ruta C — fine-tuning secuencial.** Entrena en simulación y continúa desde
ese checkpoint con los datos reales:

```bash
bash examples/finetune.sh \
  --base-model-path $HOME/groot_so101_sim/checkpoint-5000 \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_sim_then_real
```

Variables útiles de `examples/finetune.sh`:

| Variable | Por defecto | Efecto |
| --- | --- | --- |
| `SAVE_STEPS` | 1000 | Intervalo de checkpoints |
| `MAX_STEPS` | 10000 | Pasos totales de optimización |
| `GLOBAL_BATCH_SIZE` | 32 | Redúcelo en GPUs pequeñas |
| `EPISODE_SAMPLING_RATE` | 0.1 | Fracción de pasos que muestrean episodios |
| `DS_WEIGHTS_ALPHA` | sin definir | Balancea fuentes mezcladas por tamaño |
| `USE_WANDB` | 1 | Ponlo en 0 para desactivar el registro de experimentos |

:::tip Comprobación rápida con ACT
Antes de invertir horas de GPU, una política ACT pequeña entrena en minutos
sobre el mismo dataset y confirma que dataset, normalizadores y
optimizador están bien cableados:

```bash
cd ~/rebot_lerobot && source .venv/bin/activate
lerobot-train \
  --policy.type=act --policy.push_to_hub=false \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --output_dir=/tmp/act_check --steps=60 --batch_size=4
```
:::

</section>

## 10.6 Salidas del entrenamiento

<section id="outputs" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>10.6 Salidas del entrenamiento</h2>
  </div>

```text
$HOME/groot_so101_real/
├── checkpoint-1000/
├── checkpoint-2000/
├── checkpoint-5000/
└── ...
```

Cada checkpoint contiene los pesos y la configuración de experimento que
necesita el servidor de inferencia. Más pasos no siempre es mejor: evalúa
varios checkpoints en el robot real (capítulo 11) y conserva el que
complete la tarea con más fiabilidad.

Siguiente: [Capítulo 11 — Evaluar en el entorno real](es_Sim2Real_VLA_11.md).

</section>

</div>