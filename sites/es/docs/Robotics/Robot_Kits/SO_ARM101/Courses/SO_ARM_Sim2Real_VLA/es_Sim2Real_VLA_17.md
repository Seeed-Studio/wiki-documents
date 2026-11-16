---
description: "Capítulo 17 del curso Sim-to-Real VLA de SO-ARM101 — preparar el dataset y los activos del modelo en el Jetson: el dataset v2 convertido con modality.json, el checkpoint ajustado y el backbone VLM."
title: Capítulo 17 - Preparar el dataset y los activos del modelo
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - GR00T N1.7
  - Dataset
  - Checkpoint
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_17
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 17 · Deploy on Jetson</span>
    <h2>17. Preparar el dataset y los activos del modelo</h2>
    <p>
      Copia al Jetson el dataset convertido, el checkpoint ajustado y el
      backbone VLM, y valida que todo lo que necesita el exportador de
      TensorRT está presente.
    </p>
    <div className="hero-actions">
      <a href="#compat">Compatibilidad</a>
      <a href="#dataset">Dataset</a>
      <a href="#checkpoint">Checkpoint</a>
      <a href="#backbone">Backbone</a>
      <a href="#checklist">Lista de verificación</a>
    </div>
  </div>
</section>

## 17.1 Compatibilidad del dataset

<section id="compat" className="section-card">
  <div className="section-title">
    <span>Coincidir exactamente con el entrenamiento</span>
    <h2>17.1 Compatibilidad del dataset</h2>
  </div>

El dataset convertido debe conservar las claves de cámara, las
dimensiones de estado/acción, las etiquetas de tarea y los límites de
episodio usados durante el fine-tuning.

Para el SO-ARM101 eso significa:

- claves de cámara `wrist` y `front` mapeadas en `meta/modality.json`,
  exactamente igual que en el [capítulo 10](es_Sim2Real_VLA_10.md);
- seis dimensiones de estado/acción: `single_arm` 0–5, `gripper` 5–6;
- la etiqueta de plataforma `NEW_EMBODIMENT` registrada por
  `so101_config.py`.

No renombres modalidades de cámara tras el entrenamiento.

</section>

## 17.2 Convertir y copiar el dataset

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>Layout v2.1</span>
    <h2>17.2 Convertir y copiar el dataset</h2>
  </div>

Si aún no lo has convertido, ejecuta el conversor en la estación (el
mismo comando del capítulo 10):

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

Copia el dataset convertido (con su `meta/modality.json`) a la ruta del
workspace en el Jetson:

```bash
rsync -av \
  ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/ \
  jetson:"${GR00T_DATASET_PATH}/"
```

Valida el layout que espera GR00T:

```text
${GR00T_DATASET_PATH}/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_DATASET_PATH}/meta/stats.json"
test -f "${GR00T_DATASET_PATH}/meta/tasks.jsonl"
find "${GR00T_DATASET_PATH}/data" -name 'episode_*.parquet' | head
```

</section>

## 17.3 Preparar el checkpoint ajustado

<section id="checkpoint" className="section-card">
  <div className="section-title">
    <span>Solo pesos</span>
    <h2>17.3 Preparar el checkpoint ajustado</h2>
  </div>

Copia el directorio del checkpoint del capítulo 10 en
`${GR00T_MODEL_PATH}` y verifica:

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_MODEL_PATH}/model.safetensors.index.json"
ls "${GR00T_MODEL_PATH}"/model-*-of-*.safetensors
```

Los archivos de estado de entrenamiento como `optimizer.pt`,
`scheduler.pt` o `trainer_state.json` no hacen falta para inferencia ni
para el export a TensorRT.

</section>

## 17.4 Preparar el backbone VLM

<section id="backbone" className="section-card">
  <div className="section-title">
    <span>Cosmos-Reason2-2B</span>
    <h2>17.4 Preparar el backbone VLM</h2>
  </div>

GR00T 1.7 usa por defecto `nvidia/Cosmos-Reason2-2B`:

```bash
hf download nvidia/Cosmos-Reason2-2B \
  --local-dir "${GR00T_BACKBONE_PATH}"

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors" || \
  test -f "${GR00T_BACKBONE_PATH}/model.safetensors.index.json"
```

El repositorio validado también puede usar `Qwen/Qwen3-VL-2B-Instruct` a
través de `GR00T_BACKBONE_PATH`. Qwen3-VL es una alternativa validada para
este checkpoint y revisión del repositorio, no el valor por defecto
oficial de GR00T 1.7.

</section>

## 17.5 Lista de verificación de activos

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Antes del capítulo 18</span>
    <h2>17.5 Lista de verificación de activos</h2>
  </div>

- [ ] Episodios y vídeos con el layout por episodio esperado;
- [ ] Claves de cámara, etiqueta de plataforma y dimensiones coinciden
      con el entrenamiento;
- [ ] El checkpoint contiene todos los shards y los metadatos de GR00T;
- [ ] El backbone VLM elegido está fijado y disponible localmente.

Siguiente: [Capítulo 18 — Ejecutar inferencia TensorRT de GR00T N1.7](es_Sim2Real_VLA_18.md).

</section>

</div>