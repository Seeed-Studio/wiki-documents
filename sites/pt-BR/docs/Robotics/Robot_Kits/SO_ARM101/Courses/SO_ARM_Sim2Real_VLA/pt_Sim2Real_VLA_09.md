---
description: "Capítulo 9 do curso Sim-to-Real VLA do SO-ARM101 — coletar dados do ambiente real: teste as câmeras, grave episódios sincronizados de duas câmeras com lerobot-record e verifique o dataset LeRobot v3."
title: Capítulo 9 - Coletar dados do ambiente real
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Coleta de dados
  - lerobot-record
  - LeRobot Dataset
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_9
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 9 · Get Your Own VLA Model</span>
    <h2>9. Coletar dados do ambiente real</h2>
    <p>
      Teste as câmeras, grave episódios sincronizados de duas câmeras com
      `lerobot-record` e verifique o dataset LeRobot v3 antes de qualquer
      treinamento.
    </p>
    <div className="hero-actions">
      <a href="#cameras">Câmeras</a>
      <a href="#record">Gravação</a>
      <a href="#controls">Controles</a>
      <a href="#storage">Armazenamento</a>
      <a href="#verify">Verificação</a>
    </div>
  </div>
</section>

## 9.1 Testar as câmeras

<section id="cameras" class="section-card">
  <div class="section-title">
    <span>Antes de gravar</span>
    <h2>9.1 Testar as câmeras</h2>
  </div>

O capítulo 8 montou e pré-visualizou as câmeras; repita a checagem agora —
índices de `/dev/video*` mudam após reconectar ou reiniciar:

```bash
lerobot-find-cameras opencv
```

Mapeie as prévias para índices (o nome contém o índice) e exporte de novo:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Confirme também que as variáveis do braço do capítulo 7 seguem ativas
neste terminal:

```bash
echo "$TELEOP_PORT $TELEOP_ID $ROBOT_PORT $ROBOT_ID"
```

</section>

## 9.2 Gravar episódios

<section id="record" class="section-card">
  <div class="section-title">
    <span>lerobot-record</span>
    <h2>9.2 Gravar episódios</h2>
  </div>

Com os braços calibrados e o estúdio pronto, execute:

```bash
export HF_USER=local   # ou seu usuário do Hugging Face

lerobot-record \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --dataset.single_task="Put the three vials into the vial rack" \
  --dataset.num_episodes=10 \
  --dataset.push_to_hub=false \
  --display_data=false \
  --play_sounds=false
```

Siga os prompts do terminal para concluir cada episódio: pegue um frasco
com o líder, coloque no rack, solte e deixe a cena estabilizar.

Flags principais:

| Flag | Por que este valor |
| --- | --- |
| chaves `front` e `external` em `--robot.cameras` | Coincide exatamente com os nomes do dataset simulado (co-treinamento no capítulo 12) |
| `--dataset.single_task` | Deve ser esta frase exata em todo lugar — prompts e rótulos dependem dela |
| `--dataset.num_episodes` | Comece com 10; o mínimo do workshop da NVIDIA é 5, 50 é uma política decente |
| `--dataset.push_to_hub=false` | Tudo local; envie só se quiser backup |
| `--display_data=false` | Evita renderizar cada quadro na máquina de gravação |

:::caution Comece com demonstrações lentas e completas
Um episódio abortado no meio ensina a política a parar no meio. Termine a
colocação e aperte a seta direita. Cinco trajetórias limpas valem mais que
vinte interrompidas.
:::

</section>

## 9.3 Controles de gravação e segurança

<section id="controls" class="section-card">
  <div class="section-title">
    <span>Teclado</span>
    <h2>9.3 Controles de gravação e segurança</h2>
  </div>

| Tecla | Ação |
| --- | --- |
| Seta direita | Encerra antes o episódio atual e vai para o próximo |
| Seta esquerda | Descarta o episódio atual e regrava |
| `Esc` | Encerra a sessão, codifica os vídeos e finaliza o dataset |

Se o seguidor se mover inesperadamente:

1. Aperte `Ctrl+C` primeiro;
2. Se continuar se movendo, corte a alimentação de 12 V do seguidor;
3. Retorne o braço ao ponto médio com a mão;
4. Antes de reiniciar, revise calibração e ID do líder.

:::note Teclado não responde
Em algumas instalações do Ubuntu é preciso fixar o `pynput`. No ambiente
LeRobot:

```bash
pip install pynput==1.6.8
```
:::

</section>

## 9.4 Armazenamento, checkpoints e retomada

<section id="storage" class="section-card">
  <div class="section-title">
    <span>Onde os dados vivem</span>
    <h2>9.4 Armazenamento, checkpoints e retomada</h2>
  </div>

- Os dados usam o formato `LeRobotDataset` e são gravados em disco durante
  a captura, no caminho de `--dataset.root`;
- Com `--dataset.push_to_hub=false`, nada é enviado;
- Checkpoints são criados automaticamente durante a gravação. Para retomar
  após uma interrupção, rode o mesmo comando com `--resume=true`;
- Para recomeçar do zero, apague o diretório do dataset.

:::caution Sobre retomar
Ao retomar, `--dataset.num_episodes` é o número de episódios **extras** a
gravar, não o total desejado.

Se o braço travar no meio da sessão, aumente o tempo de episódio com
`--dataset.episode_time_s=90` (padrão 60) e regrave.
:::

</section>

## 9.5 Verificar o dataset

<section id="verify" class="section-card">
  <div class="section-title">
    <span>Inspecionar antes de treinar</span>
    <h2>9.5 Verificar o dataset</h2>
  </div>

Confira os metadados:

```bash
python3 -c "
import json
info = json.load(open('$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/meta/info.json'))
print('fps:', info['fps'], 'episodes:', info['total_episodes'], 'frames:', info['total_frames'])
print({k: v['shape'] for k, v in info['features'].items()})
"
```

Esperado:

```text
fps: 30 episodes: 10 frames: ...
{'observation.state': [6], 'observation.images.front': [480, 640, 3],
 'observation.images.external': [480, 640, 3], 'action': [6], ...}
```

Dois fluxos de câmera e seis dimensões de juntas são o contrato com o
resto do pipeline. Se alguma forma divergir, apague o diretório e regrave
com as mesmas flags.

Conte os vídeos:

```bash
find $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos -name "*.mp4" | wc -l
```

Dez episódios × duas câmeras = 20 arquivos. Uma checagem visual rápida:

```bash
lerobot-dataset-viz \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --episode-index 0 \
  --display-compressed-images true
```

</section>

## 9.6 Checklist de qualidade dos dados

<section id="quality" class="section-card">
  <div class="section-title">
    <span>Fique de olho</span>
    <h2>9.6 Checklist de qualidade dos dados</h2>
  </div>

Antes de treinar, revise alguns episódios por completo:

- Todo episódio **completa a tarefa** — frasco solto no rack;
- Movimentos suaves; sem pausas longas ou correções bruscas;
- Frascos começam em posições variadas entre episódios;
- A visão do punho mostra as garras e o frasco; a externa mostra o rack;
- Sem quadros perdidos (vídeo travado) e sem autofocus oscilando;
- A frase da tarefa é idêntica em todos.

Um dataset que falha em qualquer desses pontos produz uma política que
falha de um jeito irritantemente específico na implantação. Corrija os
dados agora; o treinamento não corrige por você.

Próximo: [Capítulo 10 — Treinar a política GR00T N1.7](pt_Sim2Real_VLA_10.md).

</section>

</div>