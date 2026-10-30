---
description: "Capítulo 20 do curso para iniciantes em SO-ARM Physical AI — transforme um dataset LeRobot da Fase 3 num dataset VLA pronto para o GR00T: anotações de linguagem, meta/modality.json, a etiqueta new_embodiment e a configuração so100_dualcam, checagem de dimensões e organização multitarefa."
title: Capítulo 20 - Preparando o dataset VLA do SO-ARM
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - dataset
  - modality
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_20
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_20/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 4 · Capítulo 20 · Prática</span>
    <h2>20. Preparando o dataset VLA do SO-ARM</h2>
    <p>
      Capítulo 20 do curso para iniciantes em SO-ARM Physical AI — transforme um dataset LeRobot da Fase 3 num dataset VLA pronto para o GR00T: anotações de linguagem, meta/modality.json, a etiqueta new_embodiment e a configuração so100_dualcam, checagem de dimensões e organização multitarefa.
    </p>
    <div className="hero-actions">
      <a href="#check">Conferir o dataset</a>
      <a href="#language">Linguagem</a>
      <a href="#modality">modality.json</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · Sem configuração de ambiente</span>
    <p className="sensecraft-banner__title">Pule a configuração — execute o reBot Arm e o LeRobot a partir de um único aplicativo</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics é a plataforma no-code da Seeed para o SO-ARM101, reBot Arm 102 + B601-RS e B601-DM. Conecte os braços, calibre, colete demonstrações, treine e execute inferência a partir de uma interface guiada — sem ambiente Python, sem terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Fluxo de trabalho guiado em 6 etapas</li>
      <li>✅ Treinamento em nuvem — sem GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir para SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/pt-br/sensecraft_robotics/">Guia de software</a>
  </div>
</div>

<a id="overview"></a>

## 20.1 Pré-requisitos

<section id="prerequisites" className="section-card">
  <div className="section-title">
    <span>Pré-requisitos</span>
    <h2>20.1 Pré-requisitos</h2>
  </div>

Você precisa de:

- Um dataset limpo da Fase 3 gravado no SO-ARM (Capítulos 11-13): duas vistas (`front` + `side`), 50+ episódios, uma tarefa por episódio, qualidade conferida;
- O repositório [Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) clonado na máquina de treino (o Capítulo 21 instala o ambiente completo — este capítulo só edita arquivos do dataset);
- A receita oficial de referência: [Ajustar o GR00T N1.5 no SO101](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning).

:::tip
Seu dataset ACT existente é a matéria-prima — o GR00T reutiliza os mesmos episódios LeRobot. Este capítulo só acrescenta os metadados de linguagem e modalidade.
:::

</section>

## 20.2 Conferir o dataset LeRobot

<section id="check" className="section-card">
  <div className="section-title">
    <span>Conferência</span>
    <h2>20.2 Conferir o dataset LeRobot</h2>
  </div>

### Estrutura do diretório

```text
~/.cache/huggingface/lerobot/seeedstudio123/test/
├── meta/
│   ├── info.json        ← fps, features, chaves de câmera
│   ├── tasks.jsonl      ← descrições de tarefa (edite aqui!)
│   ├── episodes/...     ← metadados por episódio
│   └── stats/...        ← estatísticas de normalização
├── data/                ← quadros parquet
└── videos/              ← fluxos de câmera
```

### Checagem rápida com Python

```python
from lerobot.common.datasets.lerobot_dataset import LeRobotDataset

ds = LeRobotDataset("seeedstudio123/test", root="~/.cache/huggingface/lerobot")
print(ds.meta.info)          # fps, features
print(ds[0]["observation.state"].shape)   # esperado torch.Size([6])
print(ds[0]["action"].shape)              # esperado torch.Size([6])
```

### Checklist obrigatório

- [ ] `observation.state` e `action` com 6 dimensões (5 juntas + garras);
- [ ] Exatamente duas features de imagem, ex.: `observation.images.front` / `observation.images.side`;
- [ ] Cada episódio pertence a uma tarefa com descrição significativa;
- [ ] Episódios quebrados conhecidos removidos (Capítulo 13).

</section>

## 20.3 Adicionar descrições de tarefa em linguagem

<section id="language" className="section-card">
  <div className="section-title">
    <span>Linguagem</span>
    <h2>20.3 Adicionar descrições de tarefa em linguagem</h2>
  </div>

### Método A: escrever direto ao gravar (recomendado)

Se gravar um dataset **novo** para a Fase 4, ligue a instrução na gravação com o mesmo `--dataset.single_task` que você já usa:

```bash
--dataset.single_task="Pick up the block at point A and place it at point B"
```

Uma tarefa = uma frase curta começando por verbo — ela vai sozinha para os metadados da tarefa.

### Método B: preencher `meta/tasks.jsonl` depois

Para um dataset existente, edite o `meta/tasks.jsonl` para que cada índice mapeie a uma instrução adequada. Mantenha o mapeamento estável: o modelo aprende essas strings exatas.

### Diretrizes de anotação

1. Uma tarefa = uma frase fixa; nunca duas redações para a mesma;
2. Começar por verbo e ser concreto: "Coloque o bloco na caixa" é melhor que "manuseio do bloco";
3. Chinês ou inglês servem — o VLM do GR00T entende ambos — mas não misture idiomas dentro de uma tarefa.

</section>

## 20.4 Criar o meta/modality.json

<section id="modality" className="section-card">
  <div className="section-title">
    <span>Modalidade</span>
    <h2>20.4 Criar o meta/modality.json</h2>
  </div>

O `modality.json` diz ao GR00T quais campos do dataset alimentam quais entradas do modelo. O layout padrão de duas câmeras do SO-ARM corresponde à configuração oficial **`so100_dualcam`**; o equivalente mínimo para um dataset local:

```json
{
    "state": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "action": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "video": {
        "front": "observation.images.front",
        "side": "observation.images.side"
    },
    "annotation": {
        "human.task_description": "task_description"
    }
}
```

### Descrição dos campos

| Campo | Significado |
| :--- | :--- |
| `state.single_arm` | Fatia `[início, fim)` do `observation.state` para as 5 juntas |
| `state.gripper` | Fatia da garras |
| `action.*` | As mesmas fatias no vetor `action` |
| `video` | Chave de câmera → feature do dataset (deve casar letra por letra com o gravado) |
| `annotation.human.task_description` | De onde vem a instrução (chave recomendada do Capítulo 18) |

:::note
A configuração `so100_dualcam` do repositório Isaac-GR00T é a versão canônica deste arquivo — se o seu layout segue o padrão (duas câmeras, estado/ação de 6), é melhor passar `--data-config so100_dualcam` no treino do que manter uma cópia à mão.
:::

</section>

## 20.5 Definir a etiqueta de embodiment

<section id="embodiment-tag" className="section-card">
  <div className="section-title">
    <span>Embodiment</span>
    <h2>20.5 Definir a etiqueta de embodiment</h2>
  </div>

O SO-ARM é ajustado como embodiment novo: etiqueta **`new_embodiment`**. Ela raramente é escrita no próprio dataset — é argumento de treino/inferência (Capítulo 21: `--embodiment-tag new_embodiment` no serviço; a receita SO101 define no treino).

O que importa no dataset é a **configuração de dados bater com a realidade**: duas câmeras e estado/ação de 6, conforme verificado em 20.2.

</section>

## 20.6 Verificar ordem de juntas e dimensões

<section id="dimensions" className="section-card">
  <div className="section-title">
    <span>Verificação</span>
    <h2>20.6 Verificar ordem de juntas e dimensões</h2>
  </div>

### Passo 1: imprimir os metadados

Confirme a lista de features e dimensões (ver 20.2): estado/ação 6/6, duas features de imagem.

### Passo 2: conferir as fatias de modalidade

Se escreveu um `modality.json` próprio, as fatias devem cobrir exatamente `[0,6)`, sem buracos nem sobreposições.

### Passo 3: visualizar

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

Confira: imagens das câmeras certas, a garras abrindo/fechando ao agarrar, juntas movendo em ordem plausível.

### Passo 4: checagem estatística

`meta/stats`: mínimos/máximos do estado dentro do intervalo calibrado; brilho médio das imagens longe de 0 ou 255 (gravações pretas ou estouradas).

</section>

## 20.7 Organização multitarefa

<section id="multi-task" className="section-card">
  <div className="section-title">
    <span>Multitarefa</span>
    <h2>20.7 Organização multitarefa</h2>
  </div>

### Método A: mesmo repo_id, vários task_index (recomendado)

Grave várias tarefas num dataset; cada episódio guarda seu `task_index`, e o `tasks.jsonl` mapeia cada índice à sua instrução. Essa é a forma natural do ajuste condicionado a linguagem.

### Método B: mesclar vários datasets

Mescle datasets por tarefa com o kit do Capítulo 13 (`--operation.type merge`). Requisitos: configuração de câmera idêntica, layout robô/features idêntico e **frases de tarefa distintas e consistentes** por origem.

### Volumes recomendados

| Cenário | Episódios | Notas |
| :--- | :--- | :--- |
| Tarefa única, A→B fixo | ~50 | Validar o fluxo de ajuste |
| Tarefa única, posições variadas | 50-100 | O volume padrão da Fase 3 |
| Multitarefa (3-5 tarefas) | 50-100 **por tarefa** | O condicionamento exige cobertura por tarefa |

</section>

## 20.8 Checklist de qualidade

<section id="quality-checklist" className="section-card">
  <div className="section-title">
    <span>Checklist</span>
    <h2>20.8 Checklist de qualidade</h2>
  </div>

- [ ] Cada episódio com uma instrução correta e única;
- [ ] Chaves de câmera do `modality.json` idênticas às features do dataset, caractere por caractere;
- [ ] `state` / `action` com 6 dimensões e fatias corretas (`single_arm` / `gripper`);
- [ ] Episódios falhos e atípicos apagados (Capítulo 13);
- [ ] Estatísticas presentes (`meta/stats`) — nunca treine com uma sessão morta no meio;
- [ ] Backup do dataset final antes de o Capítulo 21 mexer em qualquer coisa.

Dataset pronto — o próximo capítulo ajusta o GR00T sobre ele.

</section>

</div>
