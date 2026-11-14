---
description: "Capítulo 10 do curso Sim-to-Real VLA do SO-ARM101 — treinar a política GR00T N1.7: instale o Isaac-GR00T, converta o dataset para v2, registre a configuração de modalidade SO-101 e faça o fine-tuning."
title: Capítulo 10 - Treinar a política GR00T N1.7
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
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 10 · Get Your Own VLA Model</span>
    <h2>10. Treinar a política GR00T N1.7</h2>
    <p>
      Entenda o Isaac GR00T N1.7, prepare o dataset SO-101 para ele e faça
      o fine-tuning de um modelo VLA específico da tarefa com os dados do
      capítulo 9.
    </p>
    <div className="hero-actions">
      <a href="#groot">GR00T N1.7</a>
      <a href="#env">Ambiente</a>
      <a href="#dataset">Dataset</a>
      <a href="#config">Configuração</a>
      <a href="#finetune">Fine-tuning</a>
      <a href="#outputs">Saídas</a>
    </div>
  </div>
</section>

## 10.1 NVIDIA Isaac GR00T N1.7

<section id="groot" className="section-card">
  <div className="section-title">
    <span>O modelo VLA</span>
    <h2>10.1 NVIDIA Isaac GR00T N1.7</h2>
  </div>

O NVIDIA Isaac GR00T N1.7 é um modelo Vision-Language-Action (VLA) aberto
de habilidades robóticas generalizadas. Esse modelo multi-plataforma
recebe entradas multimodais — linguagem e imagens — para executar tarefas
de manipulação em ambientes diversos.

O modelo é treinado uma vez e adaptado a cada plataforma por
*configurações de modalidade*: um arquivo pequeno que diz ao GR00T quais
colunas do dataset são o braço, a garra, as câmeras e a instrução de
linguagem. Este capítulo constrói exatamente essa configuração para o
SO-ARM101.

Referências:

- [Repositório do modelo GR00T-1.7-3B no Hugging Face](https://huggingface.co/nvidia/GR00T-1.7-3B/tree/main)
- [Repositório GitHub do NVIDIA Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T/tree/main)

</section>

## 10.2 Preparar o ambiente Python

<section id="env" className="section-card">
  <div className="section-title">
    <span>Isaac-GR00T</span>
    <h2>10.2 Preparar o ambiente Python</h2>
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
O fine-tuning do modelo de 3B exige uma GPU classe RTX 5090 / RTX 6000 (a
linha de base do workshop da NVIDIA). Uma GPU de notebook de 8 GB não dá
conta deste capítulo; a checagem ACT do final roda em GPUs pequenas.
:::

</section>

## 10.3 Tratando o dataset

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v3 → v2</span>
    <h2>10.3 Tratando o dataset</h2>
  </div>

O LeRobot grava dataset v3; o fine-tuning do GR00T N1.7 lê o layout v2
antigo. Converta o dataset do capítulo 9:

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

O conversor move a cópia v3 para `so101_vials_real_V30` e deixa o dataset
v2 no caminho original. Se for mesclar episódios simulados depois
(capítulo 13), faça a mescla **antes** de converter.

Em seguida adicione `meta/modality.json` dentro do dataset convertido:

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

Por que a divisão termina em 5:

| Dimensões | Significado |
| --- | --- |
| 0–4 | `shoulder_pan`, `shoulder_lift`, `elbow_flex`, `wrist_flex`, `wrist_roll` |
| 5 | `gripper` |

O SO-ARM101 tem cinco juntas de braço mais a garra — seis valores no
total. O curso do reBot usa sete: não copie o `end: 6` dele.

O mapeamento de câmeras também é proposital:

| Feature do dataset | Câmera física | Entrada GR00T |
| --- | --- | --- |
| `observation.images.front` | Câmera de punho / garra | `wrist` |
| `observation.images.external` | Câmera superior | `front` |

</section>

## 10.4 Registrar a configuração de modalidade SO-101

<section id="config" className="section-card">
  <div className="section-title">
    <span>Configuração de plataforma</span>
    <h2>10.4 Registrar a configuração de modalidade SO-101</h2>
  </div>

```bash
cd ~/Isaac-GR00T
mkdir -p examples/so101
```

Crie `examples/so101/so101_config.py`:

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
    # Quadro atual das duas câmeras; chaves iguais ao meta/modality.json
    "video": ModalityConfig(
        delta_indices=[0],
        modality_keys=["wrist", "front"],
    ),
    # Leitura articular atual
    "state": ModalityConfig(
        delta_indices=[0],
        modality_keys=["single_arm", "gripper"],
    ),
    # Prever 16 passos futuros
    "action": ModalityConfig(
        delta_indices=list(range(0, 16)),
        modality_keys=["single_arm", "gripper"],
        action_configs=[
            # Braço: deltas relativos generalizam melhor entre poses
            ActionConfig(
                rep=ActionRepresentation.RELATIVE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
            # Garra: alvo absoluto funciona melhor para abrir/fechar
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

## 10.5 Fine-tuning do GR00T N1.7

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>Horas de GPU</span>
    <h2>10.5 Fine-tuning do GR00T N1.7</h2>
  </div>

**Rota A — seu dataset real** (o caminho padrão do curso):

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

**Rota B — co-treinamento com episódios simulados.** Mescle os datasets
antes (capítulo 13) e aponte `--dataset-path` para o conjunto mesclado. A
receita do workshop da NVIDIA: poucos episódios reais mais 70–100
simulados.

**Rota C — fine-tuning sequencial.** Treine em simulação primeiro e
continue desse checkpoint com os dados reais:

```bash
bash examples/finetune.sh \
  --base-model-path $HOME/groot_so101_sim/checkpoint-5000 \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_sim_then_real
```

Variáveis úteis do `examples/finetune.sh`:

| Variável | Padrão | Efeito |
| --- | --- | --- |
| `SAVE_STEPS` | 1000 | Intervalo de checkpoints |
| `MAX_STEPS` | 10000 | Total de passos de otimização |
| `GLOBAL_BATCH_SIZE` | 32 | Reduza em GPUs menores |
| `EPISODE_SAMPLING_RATE` | 0.1 | Fração de passos que amostram episódios |
| `DS_WEIGHTS_ALPHA` | indefinida | Equilibra fontes mescladas por tamanho |
| `USE_WANDB` | 1 | Ponha 0 para desativar o log de experimentos |

:::tip Checagem rápida com ACT
Antes de gastar horas de GPU, uma política ACT pequena treina em minutos
no mesmo dataset e confirma que dataset, normalizadores e otimizador estão
ligados corretamente:

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

## 10.6 Saídas do treinamento

<section id="outputs" className="section-card">
  <div className="section-title">
    <span>Checkpoints</span>
    <h2>10.6 Saídas do treinamento</h2>
  </div>

```text
$HOME/groot_so101_real/
├── checkpoint-1000/
├── checkpoint-2000/
├── checkpoint-5000/
└── ...
```

Cada checkpoint contém os pesos e a configuração de experimento que o
servidor de inferência precisa. Mais passos nem sempre é melhor: avalie
vários checkpoints no robô real (capítulo 11) e mantenha o que completar a
tarefa com mais confiabilidade.

Próximo: [Capítulo 11 — Avaliar no ambiente real](pt_Sim2Real_VLA_11.md).

</section>

</div>