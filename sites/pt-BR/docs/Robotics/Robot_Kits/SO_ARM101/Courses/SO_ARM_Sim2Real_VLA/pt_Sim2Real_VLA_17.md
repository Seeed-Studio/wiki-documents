---
description: "Capítulo 17 do curso Sim-to-Real VLA do SO-ARM101 — preparar o dataset e os ativos do modelo no Jetson: o dataset v2 convertido com modality.json, o checkpoint ajustado e o backbone VLM."
title: Capítulo 17 - Preparar o dataset e os ativos do modelo
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
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 17 · Deploy on Jetson</span>
    <h2>17. Preparar o dataset e os ativos do modelo</h2>
    <p>
      Copie para o Jetson o dataset convertido, o checkpoint ajustado e o
      backbone VLM, e valide que tudo que o exportador TensorRT precisa
      está presente.
    </p>
    <div className="hero-actions">
      <a href="#compat">Compatibilidade</a>
      <a href="#dataset">Dataset</a>
      <a href="#checkpoint">Checkpoint</a>
      <a href="#backbone">Backbone</a>
      <a href="#checklist">Checklist</a>
    </div>
  </div>
</section>

## 17.1 Compatibilidade do dataset

<section id="compat" className="section-card">
  <div className="section-title">
    <span>Coincidir exatamente com o treino</span>
    <h2>17.1 Compatibilidade do dataset</h2>
  </div>

O dataset convertido deve preservar as chaves de câmera, as dimensões de
estado/ação, os rótulos de tarefa e os limites de episódio usados no
fine-tuning.

Para o SO-ARM101 isso significa:

- chaves de câmera `wrist` e `front` mapeadas no `meta/modality.json`,
  exatamente como criadas no [capítulo 10](pt_Sim2Real_VLA_10.md);
- seis dimensões de estado/ação: `single_arm` 0–5, `gripper` 5–6;
- a etiqueta de plataforma `NEW_EMBODIMENT` registrada por
  `so101_config.py`.

Não renomeie modalidades de câmera depois do treino.

</section>

## 17.2 Converter e copiar o dataset

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>Layout v2.1</span>
    <h2>17.2 Converter e copiar o dataset</h2>
  </div>

Se ainda não converteu, rode o conversor na estação (o mesmo comando do
capítulo 10):

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

Copie o dataset convertido (com o `meta/modality.json`) para o caminho do
workspace no Jetson:

```bash
rsync -av \
  ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/ \
  jetson:"${GR00T_DATASET_PATH}/"
```

Valide o layout que o GR00T espera:

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

## 17.3 Preparar o checkpoint ajustado

<section id="checkpoint" className="section-card">
  <div className="section-title">
    <span>Só os pesos</span>
    <h2>17.3 Preparar o checkpoint ajustado</h2>
  </div>

Copie o diretório do checkpoint do capítulo 10 para
`${GR00T_MODEL_PATH}` e verifique:

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_MODEL_PATH}/model.safetensors.index.json"
ls "${GR00T_MODEL_PATH}"/model-*-of-*.safetensors
```

Arquivos de estado de treino como `optimizer.pt`, `scheduler.pt` e
`trainer_state.json` não são necessários para inferência nem para o export
TensorRT.

</section>

## 17.4 Preparar o backbone VLM

<section id="backbone" className="section-card">
  <div className="section-title">
    <span>Cosmos-Reason2-2B</span>
    <h2>17.4 Preparar o backbone VLM</h2>
  </div>

O GR00T 1.7 usa por padrão o `nvidia/Cosmos-Reason2-2B`:

```bash
hf download nvidia/Cosmos-Reason2-2B \
  --local-dir "${GR00T_BACKBONE_PATH}"

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors" || \
  test -f "${GR00T_BACKBONE_PATH}/model.safetensors.index.json"
```

O repositório validado também pode usar `Qwen/Qwen3-VL-2B-Instruct` via
`GR00T_BACKBONE_PATH`. O Qwen3-VL é uma alternativa validada para este
checkpoint e revisão do repositório, não o padrão oficial do GR00T 1.7.

</section>

## 17.5 Checklist de ativos

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Antes do capítulo 18</span>
    <h2>17.5 Checklist de ativos</h2>
  </div>

- [ ] Episódios e vídeos no layout por episódio esperado;
- [ ] Chaves de câmera, etiqueta de plataforma e dimensões idênticas ao
      treino;
- [ ] Checkpoint com todos os shards e metadados do GR00T;
- [ ] Backbone VLM escolhido fixado e disponível localmente.

Próximo: [Capítulo 18 — Rodar inferência TensorRT do GR00T N1.7](pt_Sim2Real_VLA_18.md).

</section>

</div>