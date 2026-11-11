---
description: "Capítulo 13 do curso Sim-to-Real VLA do SO-ARM101 (opcional) — aumento de datasets: gere cenas novas a partir de episódios gravados com o NVIDIA Cosmos Transfer e incorpore-as ao co-treinamento."
title: Capítulo 13 - Aumento de datasets (opcional)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Cosmos Transfer
  - Aumento de dados
  - Co-treinamento
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_13
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 13 · Opcional · Aumento</span>
    <h2>13. Aumento de datasets</h2>
    <p>
      Dados reais são caros e estreitos. Use o NVIDIA Cosmos Transfer para
      re-renderizar episódios gravados em cenas novas mantendo o movimento
      do robô — e treine com o dataset ampliado.
    </p>
    <div className="hero-actions">
      <a href="#why">Por que aumentar</a>
      <a href="#cosmos">Cosmos Transfer</a>
      <a href="#setup">Ambiente</a>
      <a href="#data">Preparar dados</a>
      <a href="#inference">Inferência</a>
      <a href="#integration">Integração</a>
    </div>
  </div>
</section>

:::note Este capítulo é material opcional avançado
Recomenda-se completar antes o loop real (coletar → treinar → avaliar,
capítulos 9–11). O fluxo serve tanto para o dataset real do capítulo 9
quanto para o simulado do capítulo 12.
:::

## 13.1 Por que aumentar

<section id="why" className="section-card">
  <div className="section-title">
    <span>Limites dos dados reais</span>
    <h2>13.1 Por que aumentar</h2>
  </div>

Coletar dados em cenários reais tem custo alto e limitações grandes:

- **Ambientes limitados**: normalmente grava-se em poucas cenas fixas;
- **Overfitting de fundo**: as redes podem aprender traços irrelevantes à
  tarefa (cor da parede, iluminação, disposição) e falhar em ambientes
  novos;
- **Custo de coleta alto**: cada cena extra exige reimplantação,
  recalibração e recoleta.

Usamos o Cosmos Transfer, modelo generativo de ponta, para modificar as
cenas de vídeo e ampliar a diversidade do dataset, melhorando a robustez.

</section>

## 13.2 Como o Cosmos Transfer funciona

<section id="cosmos" className="section-card">
  <div className="section-title">
    <span>Vídeo para vídeo</span>
    <h2>13.2 Como o Cosmos Transfer funciona</h2>
  </div>

O **NVIDIA Cosmos** é uma plataforma de IA básica para acelerar o
desenvolvimento de IA física (robótica e veículos autônomos). O Cosmos
Transfer é um modelo generativo **vídeo-a-vídeo**. Ele recebe três
entradas:

| Entrada | Objetivo | Exemplo |
|---|---|---|
| Vídeo-fonte (vision) | Fornece a dinâmica temporal | Vídeo de manipulação da câmera externa SO-101 |
| Sinais de controle | Restringem a estrutura espacial, preservam a morfologia | Mapa de bordas Canny + segmentação SAM2 |
| Prompt de texto | Descreve a aparência da cena-alvo | "A modern laboratory with white lab benches..." |

Os sinais de controle (bordas + segmentação) travam a forma e o movimento
do robô; o prompt de texto define o novo fundo.

| Tipo de controle | Objetivo | Pré-cálculo? |
|---|---|---|
| Edge | Preserva contornos, evita deformar o sujeito | Opcional (Canny automático) |
| Segmentation | Preserva regiões semânticas (robô/objeto/fundo) | Obrigatório (SAM2) |
| Blur | Preserva o layout global, permite variar textura | Opcional |
| Depth | Preserva relações de profundidade | Obrigatório (DepthAnything) |

:::tip As etiquetas de ação valem direto
O Transfer preserva a trajetória do robô, então as ações originais
(ângulos, estado da garra) servem como estão nos vídeos aumentados. O peso
alto de borda (0,9) é o que torna esse reaproveitamento seguro.
:::

</section>

## 13.3 Montar o ambiente

<section id="setup" className="section-card">
  <div className="section-title">
    <span>GPU e instalação</span>
    <h2>13.3 Montar o ambiente</h2>
  </div>

Requisitos de hardware:

| Modelo | VRAM mínima | GPU recomendada |
|---|---|---|
| Cosmos-Nano | ~24 GB | Uma RTX 4090 / A5000 / Jetson AGX Thor |
| Cosmos-Super | ~80 GB × 4 | 4× A100 / H100 |

Instalação:

```bash
# Clone o repositório Cosmos
git clone https://github.com/NVIDIA/Cosmos.git
cd Cosmos

# Entre no diretório do framework
cd packages/cosmos3

# Crie um ambiente virtual
uv venv --python 3.13
source .venv/bin/activate

# Instale as dependências
uv pip install -e ".[inference]"

# Entre no Hugging Face e baixe os pesos
huggingface-cli login
hf download nvidia/Cosmos-Nano --local-dir /path/to/models/Cosmos-Nano
```

</section>

## 13.4 Preparar seus dados

<section id="data" className="section-card">
  <div className="section-title">
    <span>Controles e prompts</span>
    <h2>13.4 Preparar seus dados</h2>
  </div>

Estrutura de diretórios:

```text
your_project/
├── controls/
│   └── episode_000/
│       ├── vision.mp4                # Vídeo-fonte (gravação do robô)
│       ├── control_edge.mp4           # Mapa de bordas Canny
│       └── control_seg.mp4            # Segmentação SAM2
├── prompts/
│   ├── lab_prompt.json               # Prompt da cena-alvo
│   └── workshop_prompt.json
├── specs/
│   └── my_lab.json                   # Configuração de inferência
├── negative_prompt.json
└── outputs/
```

Extraia um clipe do seu dataset SO-101 (o fluxo superior `external` dá a
melhor estrutura para o aumento):

```bash
ffmpeg -i ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos/chunk-000/observation.images.external/episode_000000.mp4 \
  -c copy your_project/controls/episode_000/vision.mp4
```

Gere o sinal de bordas:

```python
python -c "
import cv2
cap = cv2.VideoCapture('your_project/controls/episode_000/vision.mp4')
fps = cap.get(cv2.CAP_PROP_FPS)
w, h = int(cap.get(3)), int(cap.get(4))
out = cv2.VideoWriter('your_project/controls/episode_000/control_edge.mp4',
                      cv2.VideoWriter_fourcc(*'avc1'), fps, (w, h), True)
while True:
    ret, frame = cap.read()
    if not ret: break
    edges = cv2.Canny(cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY), 50, 150)
    out.write(cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR))
cap.release(); out.release()
print('edge control done')
"
```

Gere a segmentação com SAM2 (instalação à parte):

```bash
pip install sam2
python your_sam2_script.py \
  --input your_project/controls/episode_000/vision.mp4 \
  --output your_project/controls/episode_000/control_seg.mp4
```

Escreva o prompt da cena, por exemplo `prompts/lab_prompt.json`:

```json
{
  "subjects": [{
    "description": "A white SO-ARM101 robotic arm performing a tabletop pick-and-place task",
    "appearance_details": "White 3D-printed links, small two-finger gripper, wrist-mounted camera",
    "action": "pick up a vial and place it into a yellow rack",
    "pose": "Arm reaches toward the vial, gripper closes, the vial lifts and moves to the rack",
    "state_changes": "Gripper transitions from open to closed; the held vial is lifted and placed"
  }],
  "background_setting": "A modern laboratory with white lab benches, soft diffuse lighting, and a plain grey mat",
  "lighting": {
    "description": "Even, diffuse overhead lighting with no hard shadows"
  }
}
```

</section>

## 13.5 Rodar a inferência

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Gerar</span>
    <h2>13.5 Rodar a inferência</h2>
  </div>

```bash
cd /path/to/cosmos/packages/cosmos3

export TRANSFER_ROOT="/path/to/your_project"

CUDA_VISIBLE_DEVICES=0 \
  .venv/bin/python -m cosmos_framework.scripts.inference \
    --parallelism-preset=latency \
    -i "$TRANSFER_ROOT/specs/my_lab.json" \
    -o "$TRANSFER_ROOT/outputs/" \
    --checkpoint-path Cosmos-Nano \
    --seed 2026
```

Parâmetros de guia (o que importa é a proporção dos pesos; a soma deve ser
≈ 1,0):

| Parâmetro | Recomendado | Efeito |
|---|---|---|
| `guidance` | 3,0 | Força do CFG de texto — o quanto segue o prompt |
| `control_guidance` | 1,5 | Força do CFG de controle — o quão rígido preserva o movimento |
| `edge.weight` | 0,75–0,9 | Preserva a estrutura do sujeito |
| `seg.weight` | 0,1–0,25 | Consistência semântica auxiliar |

:::caution Se o robô deformar
Suba `edge.weight` (0,9 → 0,95), baixe `seg.weight` e aumente
`control_guidance`. Se o fundo quase não muda, suba `guidance` e descreva a
cena-alvo com mais detalhe. Em OOM: reduza a resolução para `"480"` e
`num_video_frames_per_chunk` para 33.
:::

Geração em lote: embrulhe o comando num loop shell sobre os diretórios de
episódios para multiplicar o dataset em várias cenas-alvo.

</section>

## 13.6 Integrar ao pipeline de treinamento

<section id="integration" className="section-card">
  <div className="section-title">
    <span>De volta ao GR00T</span>
    <h2>13.6 Integrar ao pipeline de treinamento</h2>
  </div>

Os vídeos aumentados reaproveitam os rótulos de ação e estado do episódio
original — sem re-rotular. Para incorporá-los:

1. Construa os episódios aumentados como datasets LeRobot (as mesmas seis
   colunas de juntas, as mesmas chaves `front`/`external`, a mesma frase
   de tarefa);
2. Mescle com o dataset real como os dados de sim do
   [capítulo 12](pt_Sim2Real_VLA_12.md) — toda fonte com features iguais
   entra no `lerobot-edit-dataset --operation.type=merge`;
3. Converta o conjunto mesclado para GR00T v2 e treine como no
   [capítulo 10](pt_Sim2Real_VLA_10.md), ajustando
   `EPISODE_SAMPLING_RATE` / `DS_WEIGHTS_ALPHA` quando as fontes forem
   desiguais.

Checagem de qualidade antes de treinar com dados aumentados: percorra os
quadros e confirme que o robô parece correto e os fundos críveis; depois
rode um teste curto de transferência — treine brevemente com dados
aumentados e compare a taxa de sucesso real com uma versão treinada só
com dados reais.

</section>

## 13.7 Referências

<section id="references" className="section-card">
  <div className="section-title">
    <span>Links</span>
    <h2>13.7 Referências</h2>
  </div>

- [Documentação do Cosmos](https://docs.nvidia.com/cosmos)
- [Cosmos Transfer Cookbook](https://github.com/NVIDIA/Cosmos/tree/main/cookbooks/cosmos3/generator/transfer)
- [SO-101 Workshop da NVIDIA — Estratégia 3: aumentando datasets com Cosmos](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/14-strategy3-cosmos.html)

Continue no módulo 4: [Capítulo 14 — Preparar seu Jetson](pt_Sim2Real_VLA_14.md).

</section>

</div>