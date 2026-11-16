---
description: "Capítulo 13 do curso para iniciantes em SO-ARM Physical AI — a cara de um dataset LeRobot no disco, quatro critérios de qualidade, visualização e reprodução, e o kit lerobot-edit-dataset para apagar, dividir, mesclar e converter em vídeo."
title: Capítulo 13 - Estrutura do dataset e inspeção de qualidade
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - dataset
  - visualização
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_13
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 13 · Teoria e prática</span>
    <h2>13. Estrutura do dataset e inspeção de qualidade</h2>
    <p>
      Capítulo 13 do curso para iniciantes em SO-ARM Physical AI — a cara de um dataset LeRobot no disco, quatro critérios de qualidade, visualização e reprodução, e o kit lerobot-edit-dataset para apagar, dividir, mesclar e converter em vídeo.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estrutura</a>
      <a href="#quality">Qualidade</a>
      <a href="#edit">Editar datasets</a>
    </div>
  </div>
</section>

## 13.1 Estrutura do dataset: o que realmente está no disco

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estrutura</span>
    <h2>13.1 Estrutura do dataset: o que realmente está no disco</h2>
  </div>

Um dataset local gravado no Capítulo 12 mora em `~/.cache/huggingface/lerobot/<repo_id>/`:

```text
├── meta/
│   ├── info.json          ← robô, fps, features, chaves de câmera
│   ├── episodes/          ← metadados por episódio
│   ├── stats/             ← estatísticas por feature (necessárias para treinar!)
│   └── tasks/             ← descrições de tarefa
├── data/                  ← quadros parquet: observação / estado / ação
└── videos/                ← fluxos de câmera codificados (video=true)
```

Três fatos que valem gravar na cabeça:

- **As chaves de câmera fazem parte do contrato de dados.** `front` e `side` viram `observation.images.front` / `observation.images.side`. Treino e avaliação devem usar as mesmas chaves.
- **As estatísticas são calculadas ao fim da gravação.** É por isso que não se deve matar uma sessão no meio.
- **A string `single_task` fica em `meta/tasks`** — a anotação de linguagem da Fase 4 se constrói exatamente sobre esse campo.

</section>

## 13.2 O que conta como dados "bons": quatro critérios

<section id="quality" className="section-card">
  <div className="section-title">
    <span>Qualidade</span>
    <h2>13.2 O que conta como dados "bons": quatro critérios</h2>
  </div>

1. **Integridade**: todo episódio percorre o fluxo completo "aproximar → agarrar → transportar → colocar → recolher", sem finais truncados.
2. **Consistência**: mesma estratégia, velocidade e ritmo em todos; câmeras e cena intactas.
3. **Cobertura**: posições-alvo espalhadas pela grade, não aglomeradas num canto.
4. **Limpeza**: sem agarres falhos dentro, sem quadros com o objeto fora da vista, sem o líder tampando as câmeras.

</section>

## 13.3 Visualizar e reproduzir

<section id="playback" className="section-card">
  <div className="section-title">
    <span>Inspeção</span>
    <h2>13.3 Visualizar e reproduzir</h2>
  </div>

### Visualizar um dataset

**On-line** — se gravou com `--dataset.push_to_hub=true`, cole seu repo id no [visualizador oficial de datasets](https://huggingface.co/spaces/lerobot/visualize_dataset).

**Local** — o mesmo visualizador funciona off-line:

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="Visualização do dataset" />
</div>

### Reproduzir um episódio no braço real

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>
      A reprodução move o seguidor real conforme ações gravadas. Limpe o espaço e afaste as mãos antes de começar.
    </p>
  </div>
</div>

A função `replay` reproduz qualquer episódio gravado no braço real — a melhor checagem de consistência e transferibilidade:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123 \
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
    --dataset.episode=0
```

`dataset.root` é o caminho físico; `repo_id` o nome definido na coleta; `episode` é índice base 0. O braço deve replicar o gravado — se desviar muito, suspeite primeiro de deriva de calibração, depois dos dados.

### O que fazer ao achar problemas

- **Episódio ruim (queda, erro, obstrução)**: apague — próxima seção.
- **Problema sistemático (cada episódio agarra de um lado)**: problema de design — corrija o protocolo e regrave; apagar episódios não resolve.
- **Estatísticas esquisitas (infinito/NaN na visualização)**: quase sempre um episódio quebrado; apague e regenere.

</section>

## 13.4 O kit de ferramentas: lerobot-edit-dataset

<section id="edit" className="section-card">
  <div className="section-title">
    <span>Edição</span>
    <h2>13.4 O kit de ferramentas: lerobot-edit-dataset</h2>
  </div>

Toda a "cirurgia" de dataset é feita com `lerobot-edit-dataset` e o `--operation.type` adequado.

### Apagar episódios

Apague episódios ruins (aqui 0, 2 e 5):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

Ou salve o resultado como dataset **novo**, preservando o original:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --new_repo_id seeedstudio123/test_clean \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

:::tip
Após a exclusão no local, os dados originais são copiados para uma pasta `_old` ao lado do dataset (ex.: `.../test_old/`). Confirmado o novo, pode apagar o backup.
:::

### Dividir um dataset

Por frações (ex.: 80% treino / 10% teste / 10% val) — cria `test_train`, `test_test`, `test_val`:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

Ou por índices explícitos:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

### Mesclar datasets

Combine lotes de várias sessões (as descrições de tarefa devem coincidir exatamente):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_merged \
    --operation.type merge \
    --operation.repo_ids "['seeedstudio123/test_batch1', 'seeedstudio123/test_batch2']"
```

### Remover features

Descarte uma câmera que não quer mais treinar (ex.: mantenha só a de punho):

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.side']"
```

### Converter imagens em vídeo

Converta um dataset de imagens para vídeo — menos armazenamento e leitura mais rápida no treino:

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_image \
    --new_repo_id seeedstudio123/test_video \
    --operation.type convert_image_to_video \
    --operation.vcodec libsvtav1 \
    --operation.pix_fmt yuv420p \
    --operation.g 2 \
    --operation.crf 30
```

Opções úteis: `--operation.output_dir` (pasta de saída), `--operation.num_workers 8` (codificação paralela), `--operation.max_episodes_per_batch` / `--operation.max_frames_per_batch` (máquinas com pouca memória). O resultado é um LeRobotDataset completo e padrão — vídeos em `videos/`, metadados preservados.

</section>

## 13.5 FAQ do capítulo

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>13.5 FAQ do capítulo</h2>
  </div>

- **Qual repositório do LeRobot?** O verificado do Capítulo 5: `https://github.com/Seeed-Projects/lerobot.git`. O oficial atualiza sem parar e pode mudar versões de dataset ou sintaxe de comandos.
- **A operação parece travada.** Aperte Enter para atualizar a saída do terminal. O novo formato é comprimido, as operações demoram — acompanhe a barra de progresso com paciência.
- **Referência**: [Using dataset tools](https://huggingface.co/docs/lerobot/using_dataset_tools) na documentação oficial.

</section>

</div>
