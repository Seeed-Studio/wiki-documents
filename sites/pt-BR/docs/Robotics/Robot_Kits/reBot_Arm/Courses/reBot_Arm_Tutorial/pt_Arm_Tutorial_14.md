---
description: "Capítulo 14 do Curso para Iniciantes em Inteligência Incorporada da Seeed — estrutura do dataset e inspeção de qualidade: o que é realmente armazenado em disco, os quatro padrões de qualidade, reprodução e inspeção de imagens, e o que fazer quando problemas são encontrados."
title: Capítulo 14 - Estrutura do Dataset e Inspeção de Qualidade
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Inspeção de Qualidade
  - Parquet
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_14
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_14/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 3 · Capítulo 14 · Teoria e Prática</span>
    <h2>14. Estrutura do Dataset e Inspeção de Qualidade</h2>
    <p>
      Capítulo 14 do Curso para Iniciantes em Inteligência Incorporada da Seeed — o que é realmente
      armazenado em disco, os quatro padrões de qualidade, reprodução e inspeção de imagens, e o que
      fazer quando problemas são encontrados.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estrutura</a>
      <a href="#quality">Qualidade</a>
      <a href="#fix">Correções</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>14.1 Estrutura do Dataset: O Que é Realmente Armazenado em Disco</span>
    <span>14.2 O Que Conta Como Dados “Bons”: Quatro Padrões de Qualidade</span>
    <span>14.3 Reprodução e Inspeção de Imagens</span>
    <span>14.4 O Que Fazer Quando Problemas São Encontrados</span>
  </div>
</section>

<RebotCourseNav />

## 14.1 Estrutura do Dataset: O Que é Realmente Armazenado em Disco

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estrutura</span>
    <h2>14.1 Estrutura do Dataset: O Que é Realmente Armazenado em Disco</h2>
  </div>

O dataset gravado no Capítulo 13, `seeed_rebot_b601_rs/test`, fica assim em disco:

```text
~/.cache/huggingface/lerobot/seeed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← All numeric frames (state / action / timestamps)
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← Overhead camera: 50 videos concatenated
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← Wrist camera: same
└── meta/
    ├── info.json                     ← Info: version, fps, total frames, feature definitions
    ├── stats.json                    ← Stats: mean/variance/extremes per feature
    ├── tasks.parquet                 ← Task description table
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← Profile card for each Episode
```

**Três formatos de armazenamento, cada um para um tipo de dado:**

| Formato | O que Armazena | Por quê |
| :--- | :--- | :--- |
| Vídeo MP4 | Todos os frames de imagem de ambas as câmeras | Imagens ocupam >90% do tamanho do dataset; compressão de vídeo economiza de 1 a 2 ordens de magnitude em relação a imagens por frame. |
| Tabela Parquet | Valores numéricos por frame: estado, ação, timestamps, índices | Armazenamento colunar; ler “todos os valores da junta 3” não exige carregar o arquivo inteiro. |
| Metainfo | Definições de estrutura, estatísticas, tarefas, índice de episódios | Carregadores e programas de treinamento leem isto primeiro para saber como interpretar os outros dois. |

</section>

## 14.2 O Que Conta Como Dados “Bons”: Quatro Padrões de Qualidade

<section id="quality" className="section-card">
  <div className="section-title">
    <span>Qualidade</span>
    <h2>14.2 O Que Conta Como Dados “Bons”: Quatro Padrões de Qualidade</h2>
  </div>

Para julgar se um dataset está pronto para treinamento, observe quatro dimensões:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-14/ch14-01.png" alt="Quatro padrões de qualidade" />
</div>

</section>

## 14.3 Reprodução e Inspeção de Imagens

<section id="inspection" className="section-card">
  <div className="section-title">
    <span>Inspeção</span>
    <h2>14.3 Reprodução e Inspeção de Imagens</h2>
  </div>

Para reprodução visual use `lerobot-dataset-viz`; para reprodução em robô real use `lerobot-replay`. Para reprodução em robô real, use **Episódio 0, um no meio e o último**: o primeiro verifica a correção do fluxo de trabalho, o do meio verifica deriva de estado, o último revela mais facilmente queda de qualidade relacionada à fadiga.

Durante a reprodução, verifique com base nestes critérios:

- Ambos os feeds de câmera presentes; sem telas pretas, artefatos ou streams congelados.
- Imagens nítidas e bem expostas; bloco e garra sempre visíveis.
- Ações sincronizadas com as imagens: no momento em que a garra fecha, ela deve estar tocando o bloco.
- Começa na pose inicial padrão, termina satisfazendo as condições de término.

</section>

## 14.4 O Que Fazer Quando Problemas São Encontrados

<section id="fix" className="section-card">
  <div className="section-title">
    <span>Correções</span>
    <h2>14.4 O Que Fazer Quando Problemas São Encontrados: Excluir, Complementar ou Regravar Todo o Conjunto</h2>
  </div>

Três caminhos quando problemas são encontrados:

- **Alguns poucos Episódios ruins** (por exemplo, Episódios 3 e 17 estão borrados) → exclua esses 2 e depois grave mais 2.
- **Problemas em todo o lote** (por exemplo, metade tem iluminação diferente, o lote inteiro tem dessincronização de áudio e vídeo) → não faça remendos, regrave todo o conjunto. Um dataset remendado prejudica mais o modelo do que ter menos dados.

Dois fatos sobre exclusão: após a exclusão, a ferramenta **reconstrói** automaticamente o dataset — os episódios são renumerados de forma consecutiva, `stats.json` é recalculado; você não precisa corrigir nada manualmente. Seja excluindo ou complementando, a ferramenta regenera os metadados.

</section>

</div>
