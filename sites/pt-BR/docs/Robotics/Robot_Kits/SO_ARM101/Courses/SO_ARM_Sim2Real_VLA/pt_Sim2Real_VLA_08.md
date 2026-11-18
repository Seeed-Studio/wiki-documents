---
description: "Capítulo 8 do curso Sim-to-Real VLA do SO-ARM101 — montando o ambiente de trabalho: lista de hardware do estúdio, lightbox, suportes de câmera, posições do rack e objetos, e as duas câmeras."
title: Capítulo 8 - Montando o ambiente de trabalho
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Ambiente de trabalho
  - Lightbox
  - Suporte de câmera
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_8
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_8/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 2 · Capítulo 8 · Build Your Robot Lab</span>
    <h2>8. Montando o ambiente de trabalho</h2>
    <p>
      A tarefa é sempre a mesma: colocar três frascos no rack. Este
      capítulo monta o estúdio que torna a tarefa gravável e repetível —
      lista de hardware, lightbox, suportes, posições de objetos e
      câmeras.
    </p>
    <div className="hero-actions">
      <a href="#hardware">Hardware</a>
      <a href="#lightbox">Lightbox</a>
      <a href="#brackets">Suportes</a>
      <a href="#props">Posições</a>
      <a href="#cameras">Câmeras</a>
      <a href="#checklist">Checklist</a>
    </div>
  </div>
</section>

## 8.1 Lista de hardware

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>Lista de materiais</span>
    <h2>8.1 Lista de hardware</h2>
  </div>

| Item | Descrição | Qtd |
|---|---|---|
| Kit Pro SO-ARM101 (líder + seguidor) | [Kit de braço IA SO-ARM101](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 |
| Câmeras USB ×2 | Uma para o punho e uma externa; qualquer câmera UVC a 640×480 e 30 FPS | 2 |
| Suportes de câmera | Suporte de punho do workshop + um suporte externo rígido | 2 |
| Rack de frascos e três frascos | Objetos da tarefa — mesma geometria do gêmeo digital | 1 kit |
| Lightbox ou caixa de foam + luz difusa | Fundo uniforme e iluminação estável | 1 |
| Tapete não refletivo | Superfície para os objetos | 1 |
| Hub USB alimentado | Se o PC ou Jetson não tiver portas suficientes | 1 |

Políticas aprendem o que as câmeras veem. Uma mesa comum com janela atrás
produz um dataset cheio de mudanças de luz; o estúdio remove esse ruído. A
abordagem segue os capítulos de dataset do curso iniciante
([capítulo 11 — design de tarefas](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_11/)
e [capítulo 12 — configuração de câmeras](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_12/)).

</section>

## 8.2 O lightbox

<section id="lightbox" className="section-card">
  <div className="section-title">
    <span>O estúdio</span>
    <h2>8.2 O lightbox</h2>
  </div>

O estúdio mínimo:

| Item | Objetivo |
| --- | --- |
| Caixa de foam ou tapete liso | Fundo uniforme atrás dos objetos |
| Luz branca difusa (luminária com difusor, ou 2 LEDs a 45°) | Luz suave e estável sem sombras duras |
| Superfície não refletiva | Frascos e rack visíveis das duas câmeras |
| Posição fixa do robô | Seguidor parafusado ou fixado com fita, base voltada aos objetos |

:::tip Uma luz ganha de três
Várias fontes desiguais criam reflexos móveis nos frascos brilhantes. Uma
luz superior difusa mais a luz ambiente é mais fácil de reproduzir outro
dia — o que importa quando você gravar mais episódios.
:::

</section>

## 8.3 Suportes e fixações

<section id="brackets" className="section-card">
  <div className="section-title">
    <span>Suportes</span>
    <h2>8.3 Suportes e fixações</h2>
  </div>

Dois suportes carregam as câmeras; ambos precisam de rigidez suficiente
para sobreviver a uma semana de gravação sem desviar.

**Suporte da câmera de punho.** Montado na garra do seguidor, seguindo o
suporte oficial do workshop SO-101: a câmera fica acima das garras,
inclinada cerca de 45° para baixo, de modo que as pontas e o objeto agarrado
permaneçam enquadradados em todo o alcance. Imprima ou compre o suporte do
workshop e aperte bem os parafusos — uma câmera de punho que gira no meio
de um episódio invalida todos os episódios seguintes.

**Suporte da câmera externa.** Qualquer suporte rígido serve: tripé
pequeno, poste de perfil 2020 ou braço articulado preso à mesa. Posicione
acima e à frente do espaço para que um quadro cubra o rack, as três
posições de frascos e a maior parte do alcance do seguidor. Não segure
com a mão nem prenda na mesma tábua que o seguidor empurra.

Cabeamento: deixe folga no punho para o laço não enganchar e afaste os
dois cabos da área de trabalho do seguidor.

</section>

## 8.4 Posições dos objetos

<section id="props" className="section-card">
  <div className="section-title">
    <span>Posições</span>
    <h2>8.4 Posições dos objetos</h2>
  </div>

A definição da tarefa faz parte do dataset. Mantenha-a consistente:

- **Rack de frascos**: à direita da base do seguidor, ao alcance
  confortável — mesmo lado e distância do gêmeo digital;
- **Três frascos**: espalhados na área à frente do braço, a uns 10–20 cm;
  recoloque-os à mão entre episódios;
- **Frase da tarefa**: `Put the three vials into the vial rack` — a string
  exata usada na gravação do capítulo 9 e no dataset do gêmeo. Não
  parafraseie entre episódios.

:::tip Meça uma vez e faça um fixture
Prenda o rack com fita e marque a área de frascos no tapete. Reproduzir
posições importa mais que precisão milimétrica.
:::

Se for coletar episódios simulados (capítulo 12), alinhe a bancada à cena
do gêmeo — o gêmeo é a especificação:

| Checagem | Referência no sim | Bancada real |
| --- | --- | --- |
| Posição do rack | Fixa em `SO101_RACK_POSITION` | Mesmo lado e distância relativos à base |
| Área inicial dos frascos | `SO101_VIAL_POSITIONS` | Mesma região de 10–20 cm à frente do braço |
| Visadas de câmera | Punho + externa | Mesmo enquadramento, 640×480, 30 FPS |
| Iluminação | Dome + luz principal | Difusa, sem sombra forte no rack |

Um desvio de 1–2 cm é tolerável. Rack do outro lado, câmera em outra
altura ou câmera na mão, não.

</section>

## 8.5 Câmeras

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Duas visadas</span>
    <h2>8.5 Câmeras</h2>
  </div>

Liste as câmeras e capture uma prévia de cada uma:

```bash
lerobot-find-cameras opencv
```

As imagens vão para `outputs/captured_images/`; o nome do arquivo contém
o índice do dispositivo: `opencv__dev_video4.png` é o índice 4. Exporte:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Índices podem mudar após reiniciar ou reconectar; repita a checagem antes
de cada sessão de gravação. Bloqueie foco e exposição se a câmera suportar
— autofocus caçando durante um episódio vira quadros borrados de treino.

Verifique as duas visadas durante a teleoperação:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --display_data=true \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }"
```

:::note Os nomes das câmeras fazem parte do schema do dataset
O curso grava com as chaves `front` (câmera de punho) e `external`
(câmera superior) para que o dataset real tenha exatamente os mesmos nomes
de features do simulado no capítulo 12 — é isso que permite o
co-treinamento sim+real sem renomear features. O capítulo 10 mapeia os dois
fluxos para as entradas `wrist` e `front` do GR00T.
:::

</section>

## 8.6 Checklist do estúdio

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Antes do capítulo 9</span>
    <h2>8.6 Checklist do estúdio</h2>
  </div>

- Lightbox ou tapete no lugar, uma luz difusa, sem sombra forte no rack;
- Seguidor fixado; líder ao alcance das mãos;
- Suporte de punho rígido, câmera inclinada ~45°, enxerga as garras;
- Câmera externa em suporte rígido, enxerga o rack e os três slots;
- As duas câmeras pré-visualizam a 640×480 e 30 FPS, foco travado;
- `CAMERA_GRIPPER` e `CAMERA_EXTERNAL` exportados;
- Rack preso com fita, área de frascos marcada, frase da tarefa fixada.

Próximo: [Capítulo 9 — Coletar dados do ambiente real](pt_Sim2Real_VLA_09.md).

</section>

</div>