---
description: "Capítulo 19 do curso para iniciantes em SO-ARM Physical AI — o que é um embodiment, como juntas, estado, ação e câmeras do SO-ARM são definidos para o GR00T, o paradigma de modelo fundacional mais ajuste fino, e o encaixe do servidor de inferência GR00T com o cliente de controle do robô."
title: Capítulo 19 - Embodiment do robô e arquitetura do GR00T
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - embodiment
  - VLA
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_19
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_19/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 4 · Capítulo 19 · Teoria</span>
    <h2>19. Embodiment do robô e arquitetura do GR00T</h2>
    <p>
      Capítulo 19 do curso para iniciantes em SO-ARM Physical AI — o que é um embodiment, como juntas, estado, ação e câmeras do SO-ARM são definidos para o GR00T, o paradigma de modelo fundacional mais ajuste fino, e o encaixe do servidor de inferência GR00T com o cliente de controle do robô.
    </p>
    <div className="hero-actions">
      <a href="#embodiment">Embodiment</a>
      <a href="#joints">Juntas e estado</a>
      <a href="#architecture">Arquitetura</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 19.1 O que é um embodiment?

<section id="embodiment" className="section-card">
  <div className="section-title">
    <span>Embodiment</span>
    <h2>19.1 O que é um embodiment?</h2>
  </div>

"Embodiment" é como um robô existe fisicamente: quantas juntas, quais câmeras, que garras, que espaço de ações. Um modelo VLA fundacional é treinado atravessando **muitos** embodiments — braços diferentes, humanoides, plataformas móveis — então precisa de um jeito de dizer "para qual corpo estou agindo agora?"

Esse jeito é a **etiqueta de embodiment (embodiment tag)**. Ao ajustar o GR00T com dados do SO-ARM, o dataset carrega a etiqueta `new_embodiment`, que seleciona a projeção de entrada/saída correta para um embodiment de braço único. Junto com uma **configuração de dados** — para o layout padrão de duas câmeras do SO-ARM, `so100_dualcam` — o modelo fica sabendo exatamente como é esse corpo.

:::note
O SO-ARM é um dos embodiments de baixo custo melhor suportados do ecossistema GR00T: o guia oficial de ajuste da NVIDIA usa dados de SO101, e a via de política `groot` do LeRobot também funciona com datasets do SO-ARM.
:::

</section>

## 19.2 Juntas, estado e ação do SO-ARM

<section id="joints" className="section-card">
  <div className="section-title">
    <span>Definições</span>
    <h2>19.2 Juntas, estado e ação do SO-ARM</h2>
  </div>

### Juntas e estado

O `observation.state` do SO-ARM tem 6 dimensões, na ordem fixa gravada nos metadados do dataset:

| Dim. | Junta |
| :---: | :--- |
| 0 | rotação do ombro |
| 1 | elevação do ombro |
| 2 | cotovelo |
| 3 | arfagem do punho |
| 4 | rotação do punho |
| 5 | garras |

### Ação

A `action` espelha as mesmas 6 dimensões: posições-alvo do passo seguinte. No `modality.json` (Capítulo 20), o grupo estado/ação se divide em `single_arm` (dims 0-4) e `gripper` (dim 5), porque o GR00T pode processá-los por cabeças diferentes.

</section>

## 19.3 Modalidade de câmera

<section id="camera-modality" className="section-card">
  <div className="section-title">
    <span>Câmeras</span>
    <h2>19.3 Modalidade de câmera</h2>
  </div>

### Layouts comuns (SO-ARM)

A configuração `so100_dualcam` espera duas vistas — o layout padrão do ecossistema:

| Chave | Vista | Papel |
| :--- | :--- | :--- |
| `front` (ou `top`) | Superior / frontal cobrindo a área | Onde está o objeto, onde está B |
| `side` (ou `wrist`) | Lateral ou da garras | Altura sobre a mesa, contato com o objeto |

### Notas

- As chaves gravadas no dataset precisam reaparecer idênticas na inferência.
- Duas vistas são o ponto ideal do GR00T neste braço; mais câmeras pedem configuração própria.

</section>

## 19.4 Modalidade de linguagem

<section id="language-modality" className="section-card">
  <div className="section-title">
    <span>Linguagem</span>
    <h2>19.4 Modalidade de linguagem</h2>
  </div>

### Lado dos dados

Cada episódio carrega a descrição ligada na gravação (o `--dataset.single_task` do Capítulo 12) ou preenchida em `meta/tasks.jsonl`. O GR00T lê pela chave de anotação `human.task_description` (a recomendada no Capítulo 18 para dados do SO-ARM).

### Lado da inferência

Na implantação, a instrução é passada ao vivo — ex.: o `--lang_instruction="Grab pens and place into pen holder."` do cliente no Capítulo 21. Troque a frase, troque a tarefa; mesmos pesos.

</section>

## 19.5 Janela de observação e janela de ação

<section id="windows" className="section-card">
  <div className="section-title">
    <span>Janelas</span>
    <h2>19.5 Janela de observação e janela de ação</h2>
  </div>

O GR00T processa a observação **atual** (imagens + estado + linguagem) e emite um **bloco de ações** cobrindo uma janela curta de futuro (16 passos no N1.5). Como o ACT do Capítulo 14, só a primeira parcela é executada antes de reobservar — o mesmo compromisso bloco/horizonte, agora dentro de um modelo muito maior.

</section>

## 19.6 Modelo fundacional e ajuste fino

<section id="foundation" className="section-card">
  <div className="section-title">
    <span>Paradigma</span>
    <h2>19.6 Modelo fundacional e ajuste fino</h2>
  </div>

### Modelo fundacional

Um backbone VLM pré-treinado com dados visuais-linguísticos em escala de internet e grandes datasets multi-robô — chega já "conhecendo objetos" e sabendo aproximadamente "como parece a manipulação". Os pesos pré-treinados do GR00T N1.5-3B estão no Hugging Face: `nvidia/GR00T-N1.5-3B`.

### Ajuste fino

Seu dataset do SO-ARM adapta o modelo fundacional à sua mesa, seus objetos, sua redação de instruções:

- O ajuste completo retreina mais da rede (~25GB de VRAM, Capítulo 21);
- O ajuste parcial (ex.: `--no-tune_diffusion_model`, congela a cabeça DiT) corta VRAM e tempo, com alguma perda de precisão;
- Variantes LoRA / PEFT treinam só camadas de adaptador pequenas.

### Zero-shot vs. ajuste

O zero-shot (sem ajuste) às vezes "se move de forma plausível", mas raramente completa sua tarefa específica com confiabilidade — sua mesa nunca esteve no pré-treino. Ajustar com 50-100 episódios locais é o caminho esperado.

</section>

## 19.7 Arquitetura do sistema GR00T

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>Arquitetura</span>
    <h2>19.7 Arquitetura do sistema GR00T</h2>
  </div>

### Fluxo interno (simplificado)

```text
imagens (frontal, lateral) ─┐
estado (6 dims) ────────────┼─→ backbone VLM ─→ cabeça DiT ─→ bloco de ações (k × 6)
linguagem ──────────────────┘      (entender)      (denoise)      (para os servos)
```

- O **backbone VLM** funde as três modalidades num entendimento semântico da cena e da instrução;
- A **cabeça DiT (Diffusion Transformer)** denoise repetidamente um latente até um bloco contínuo e coerente (Flow Matching);
- O bloco flui para o lado de controle, que executa os primeiros passos e reobserva.

### Servidor de inferência GR00T e cliente de controle do robô

Na implantação, a pilha NVIDIA Isaac-GR00T se divide em dois processos:

**Cliente de controle do robô** — conecta o SO-ARM e as câmeras, envia observações (imagens + estado + linguagem) ao servidor, recebe blocos e os executa nos servos. O exemplo oficial é `examples/SO-100/eval_lerobot.py` — escrito exatamente para este braço.

**Servidor de inferência GR00T** — segura o modelo, roda na GPU disponível (estação, instância em nuvem ou Jetson AGX Thor na imagem Docker) e responde o cliente pela rede.

```text
[ SO-ARM + câmeras ] ⇄ USB ⇄ [ cliente de controle ] ⇄ rede ⇄ [ servidor GR00T + GPU ]
```

### Checklist de integração

Antes da prática do Capítulo 21, garanta que você sabe responder:

1. Qual etiqueta de embodiment? → `new_embodiment`
2. Qual configuração de dados? → `so100_dualcam`
3. Quais chaves de câmera? → exatamente as do dataset
4. Qual redação de instrução? → exatamente as anotadas no dataset

</section>

## 19.8 A posição do SO-ARM no GR00T

<section id="soarm-in-groot" className="section-card">
  <div className="section-title">
    <span>Posição</span>
    <h2>19.8 A posição do SO-ARM no GR00T</h2>
  </div>

- Um **embodiment de mesa, barato e reprodutível** — as mesmas qualidades que o fizeram braço de referência do LeRobot o tornam alvo de ajuste para o GR00T;
- Suportado pela **receita oficial de ajuste SO101** (blog da NVIDIA + exemplos SO-100 do repositório Isaac-GR00T);
- Implantável na **borda** com Jetson AGX Thor para inferência;
- E — Capítulo 22 — alcançável pela **plataforma sem código SenseCraft Robotics** para quem pula a cadeia GR00T inteira.

</section>

## 19.9 Resumo do capítulo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumo</span>
    <h2>19.9 Resumo do capítulo</h2>
  </div>

- Embodiment = a definição do corpo do robô; para o SO-ARM no GR00T: etiqueta `new_embodiment`, configuração `so100_dualcam`.
- Estado/ação têm 6 dimensões em ordem fixa; duas câmeras + linguagem completam o conjunto de modalidades.
- Modelo fundacional + ajuste supera o zero-shot para a sua mesa.
- A implantação se divide em cliente de controle (braços + câmeras) e servidor de inferência com GPU.

O próximo capítulo prepara seu dataset do SO-ARM para o ajuste do GR00T.

</section>

</div>
