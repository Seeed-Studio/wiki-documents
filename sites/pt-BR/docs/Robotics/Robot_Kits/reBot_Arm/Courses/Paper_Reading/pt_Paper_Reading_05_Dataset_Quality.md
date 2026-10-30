---
description: "Entenda a estrutura de vídeo, Parquet e metadados do LeRobot e verifique a sincronização temporal, a qualidade das imagens e a completude das demonstrações."
title: "Como validar a qualidade do dataset para robótica"
hide_title: true
keywords:
  - Implantação prática
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Braço robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Robótica
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_dataset_quality
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/hands_on_dataset_quality/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-dataset_quality-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLANTAÇÃO PRÁTICA</span>
  <h1 id="hands-on-dataset_quality-title">Como validar a qualidade do dataset para robótica</h1>
  <p className="paper-reading-lead">Entenda os arquivos de vídeo, Parquet e metadados do LeRobot e, em seguida, verifique a sincronização temporal, a qualidade das imagens e a completude das demonstrações.</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Estrutura do dataset</li>
    <li>Sincronização temporal</li>
    <li>Verificações de qualidade</li>
    <li>Resolução de problemas</li>
  </ul>
</section>

## Estrutura do Dataset

**Um dataset gravado como `seed_rebot_b601_rs/test` tem o seguinte layout:**

```text
~/.cache/huggingface/lerobot/seed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← Numerical frames: state / action / timestamps
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← Front camera: concatenated video for 50 episodes
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← Wrist camera: the same arrangement
└── meta/
    ├── info.json                     ← Version, fps, frame count, and feature definitions
    ├── stats.json                    ← Mean, variance, and extrema for each feature
    ├── tasks.parquet                 ← Task descriptions
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← Per-episode records
```

**Três formatos armazenam três tipos de informação:**

| Formato | Conteúdo | Por que usar? |
|---|---|---|
| Vídeo MP4 | Todos os frames de imagem de ambas as câmeras | As imagens representam mais de 90% do tamanho do dataset; a compactação de vídeo pode economizar de uma a duas ordens de magnitude em comparação com arquivos de imagem individuais. |
| Tabelas Parquet | Estado por frame, ação, carimbos de tempo e índices | O armazenamento colunar permite ler, por exemplo, todos os valores da junta 3 sem carregar a tabela inteira. |
| Metadados | Estrutura, estatísticas, tarefas e índices de episódios | Carregadores e programas de treinamento leem isso primeiro para interpretar os outros arquivos. |

---

## Carimbos de Tempo e Sincronização

- As imagens trafegam via USB, enquanto os dados das juntas trafegam via CAN, então eles naturalmente chegam ao computador em momentos diferentes. O LeRobot atribui **carimbos de tempo** para alinhar imagens, estados e ações que representam o mesmo instante lógico em uma linha.

![Estrutura do Dataset e Verificações de Qualidade: Carimbos de Tempo e Sincronização (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-01-timestamp-sync-en.png)

---

## Avaliar a Qualidade Geral do Dataset

Verifique quatro dimensões antes de usar um dataset para treinamento:

![Estrutura do Dataset e Verificações de Qualidade: Avaliar a Qualidade Geral do Dataset (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-02-quality-checklist-en.png)

---

## Reproduzir e Inspecionar Imagens

Use `lerobot-dataset-viz` para visualização e `lerobot-replay` para reprodução no robô, conforme descrito anteriormente. Inspecione pelo menos **o episódio 0, um episódio intermediário e o episódio final**. O primeiro verifica o fluxo de trabalho, o intermediário verifica deriva e o último geralmente revela perda de qualidade por fadiga do operador.

Durante a reprodução, verifique se:

- As duas visualizações de câmera estão presentes, sem frames pretos, imagens corrompidas ou fluxo congelado.

- As imagens estão nítidas e corretamente expostas, com o bloco e o gripper visíveis o tempo todo.

- As ações e as imagens estão alinhadas: quando o gripper fecha, a imagem o mostra em contato com o bloco.

- O episódio começa na pose inicial padrão e termina com a condição de parada satisfeita.

---

## O Que Fazer Quando Problemas Aparecem

Trate os problemas de acordo com seu escopo:

- **Alguns poucos episódios ruins**, como imagens borradas nos episódios 3 e 17: remova esses dois e grave duas substituições.

- **Problemas generalizados**, como mudanças de iluminação em metade dos episódios ou um lote inteiro com vídeo e ações desalinhados: grave o dataset novamente. Um remendo de correções inconsistentes pode ser pior do que ter menos dados.

Após a exclusão, a ferramenta reconstrói o dataset automaticamente: os índices de episódios se tornam consecutivos e o `stats.json` é recalculado. Ao remover ou adicionar episódios, as ferramentas regeneram os metadados; você não precisa editá-los manualmente.

---

</div>
