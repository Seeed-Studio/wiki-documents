---
description: "Capítulo 11 do curso Sim-to-Real VLA do SO-ARM101 — avaliar no ambiente real: rode o GR00T N1.7 ajustado no seguidor SO-101 físico com um servidor de políticas e um cliente de robô desacoplados."
title: Capítulo 11 - Avaliar no ambiente real
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - GR00T N1.7
  - Inferência
  - Avaliação
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_11
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 11 · Get Your Own VLA Model</span>
    <h2>11. Avaliar no ambiente real</h2>
    <p>
      Implantando o GR00T N1.7 ajustado no mundo real: um servidor de
      políticas roda o modelo e um cliente de robô dirige o seguidor SO-101
      em malha fechada.
    </p>
    <div className="hero-actions">
      <a href="#architecture">Arquitetura</a>
      <a href="#server">Servidor</a>
      <a href="#client">Cliente</a>
      <a href="#safety">Segurança</a>
      <a href="#iterate">Iterar</a>
    </div>
  </div>
</section>

## 11.1 Arquitetura de implantação

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>Design desacoplado</span>
    <h2>11.1 Arquitetura de implantação</h2>
  </div>

A arquitetura de implantação do Isaac GR00T separa inferência de controle:

- **Lado de inferência (servidor)**: dedicado exclusivamente a executar o
  modelo;
- **Lado de controle (cliente)**: responsável por adquirir o estado do
  braço e coordenar seu controle de movimento.

Servidor e cliente podem rodar em dois dispositivos separados (por
exemplo, uma estação com GPU servindo políticas para um robô em Jetson —
capítulo 18) ou, como demonstrado aqui, ambos num único computador.

:::caution VRAM
A avaliação numa única máquina exige uma GPU NVIDIA com VRAM para o modelo
GR00T de 3B — a mesma classe que o ajustou (capítulo 10).
:::

A avaliação usa o cliente de robô real SO-101 do workshop da NVIDIA, que
cuida da malha fechada completa: as observações entram, volta um bloco de
16 ações, e o cliente alinha no tempo e mescla as previsões sobrepostas
antes de transmitir comandos de motor ao seguidor a 30 Hz.

</section>

## 11.2 Terminal 1: iniciar o servidor de inferência

<section id="server" className="section-card">
  <div className="section-title">
    <span>Servidor de políticas</span>
    <h2>11.2 Terminal 1: iniciar o servidor de inferência</h2>
  </div>

O contêiner de robô real da NVIDIA monta os scripts de avaliação e o
diretório de checkpoints. Inicie montando seu diretório de saída:

```bash
cd ~/Sim-to-Real-SO-101-Workshop
docker run -it --rm --name real-robot --network host --privileged --gpus all \
  -e DISPLAY \
  -v /dev:/dev \
  -v /run/udev:/run/udev:ro \
  -v $HOME/.Xauthority:/root/.Xauthority \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v $HOME/.cache/huggingface/lerobot/calibration:/root/.cache/huggingface/lerobot/calibration \
  -v $HOME/groot_so101_real:/workspace/models/so101 \
  -v $(pwd)/docker/real/scripts:/Isaac-GR00T/gr00t/eval/real_robot/SO100 \
  real-robot \
  /bin/bash
```

Dentro do contêiner, inicie o servidor no seu checkpoint:

```bash
python Isaac-GR00T/gr00t/eval/run_gr00t_server.py \
  --model-path /workspace/models/so101/checkpoint-5000
```

O servidor escuta na porta 5555 e continua rodando entre rollouts — entre
tentativas só o cliente é parado.

</section>

## 11.3 Terminal 2: iniciar o cliente de robô

<section id="client" className="section-card">
  <div className="section-title">
    <span>Malha fechada</span>
    <h2>11.3 Terminal 2: iniciar o cliente de robô</h2>
  </div>

Anexe um segundo terminal ao contêiner:

```bash
docker exec -it real-robot /bin/bash
```

Rode o script de avaliação. Atenção às chaves de câmera: na inferência os
nomes de runtime são `wrist` e `front` — os mesmos que o arquivo de
modalidade produziu no capítulo 10. As câmeras físicas não mudam: `wrist`
é a câmera da garra e `front` a superior.

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=localhost \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack" \
  --rerun True
```

Comportamento esperado:

1. O seguidor se ergue lentamente até a postura inicial;
2. Entra em modo de inferência e inicia a tarefa;
3. `Ctrl+C` no Terminal 2 para e leva o braço de volta à base;
4. O servidor do Terminal 1 continua vivo para rollouts repetidos.

:::tip Avalie vários checkpoints
Rode o cliente novamente com outros números de checkpoint (pare os dois
terminais, troque `--model-path`, reinicie) e mantenha o de maior taxa de
sucesso — não simplesmente o último.
:::

</section>

## 11.4 Segurança

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Antes de apertar Enter</span>
    <h2>11.4 Segurança</h2>
  </div>

A política pode se mover mais rápido do que uma pessoa espera:

- Mantenha mãos, cabelo e mangas fora da área de frascos durante os
  rollouts;
- Afaste cabos de câmera e alimentação da área de trabalho do seguidor;
- Deixe o interruptor do seguidor ao alcance — cortar a energia dos
  motores é a parada de emergência;
- Recoloque os frascos na área inicial entre rollouts e confira que o
  rack não se moveu.

</section>

## 11.5 Iterar sobre o que você vê

<section id="iterate" className="section-card">
  <div className="section-title">
    <span>Falha → correção</span>
    <h2>11.5 Iterar sobre o que você vê</h2>
  </div>

O primeiro rollout real raramente acerta sempre. Observações típicas e
suas correções:

| Observação | Causa provável | Correção |
| --- | --- | --- |
| Erra a pegada por alguns centímetros | Enquadramento diferente do treino | Reveja as posições de câmera do capítulo 8 |
| Pega e depois derruba o frasco | Lacuna de contato / atrito | Grave mais episódios reais com pegadas bem-sucedidas |
| Vai na direção certa mas deriva | Calibração desviada | Rode `lerobot-calibrate` e o verificador de novo |
| Ignora a instrução de linguagem | Texto da tarefa diferente | Use a frase exata da gravação em `--lang_instruction` |
| O servidor rejeita a observação | Chaves de câmera erradas | Mantenha `wrist` e `front` no comando de avaliação |
| Empaca no meio da tarefa | Episódio terminou em espera | Grave demonstrações mais longas e completas |

Itere nesta ordem: primeiro conserte estúdio e câmeras, depois adicione
5–10 episódios reais (capítulo 9), depois treine de novo (capítulo 10).
Trocar o modelo antes de consertar os dados costuma esconder o problema
real.

| Sintoma | Causa | Correção |
| --- | --- | --- |
| `address already in use` na porta 5555 | Servidor antigo rodando | Pare o contêiner ou processo anterior |
| Servidor sobe mas o rollout não age | Caminho de checkpoint obsoleto | Confirme que o mount e `--model-path` apontam ao mesmo checkpoint |
| Robô volta à base imediatamente | Erro de política ou observação | Leia o log do servidor; confira streams e nomes de juntas |
| `Cannot find calibration` no contêiner | Calibração não montada | Monte `~/.cache/huggingface/lerobot/calibration` (já incluído no `docker run`) |

Para o deploy na borda — rodar a política num Jetson em vez da GPU da
estação — siga para o
[capítulo 14 — Preparar seu Jetson](pt_Sim2Real_VLA_14.md), ou amplie o
dataset antes com os opcionais [capítulo 12](pt_Sim2Real_VLA_12.md) e
[capítulo 13](pt_Sim2Real_VLA_13.md).

Voltar à visão geral: [Curso Sim-to-Real VLA do SO-ARM101](pt_Sim2Real_VLA_Introduction.md).

</section>

</div>