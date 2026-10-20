---
description: "Capítulo 17 do curso para iniciantes em SO-ARM Physical AI (eletivo) — escale de um braço para dois: cabeie quatro braços, calibre os pares líder/seguidor esquerdo e direito, teleopere e grave com bi_so_follower / bi_so_leader, treine ACT e implante políticas bimanuais."
title: Capítulo 17 - Treinamento de dupla braço SO-ARM
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - dupla braço
  - bimanual
  - treinamento
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_17
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 17 · Eletivo</span>
    <h2>17. Treinamento de dupla braço SO-ARM</h2>
    <p>
      Capítulo 17 do curso para iniciantes em SO-ARM Physical AI (eletivo) — escale de um braço para dois: cabeie quatro braços, calibre os pares líder/seguidor esquerdo e direito, teleopere e grave com bi_so_follower / bi_so_leader, treine ACT e implante políticas bimanuais.
    </p>
    <div className="hero-actions">
      <a href="#wiring">Cabeamento</a>
      <a href="#calibration">Calibração</a>
      <a href="#training">Treinar</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>O que você precisará</strong>
    <span>Dois kits SO-ARM (4 braços: 2 líderes + 2 seguidores).</span>
    <span>O mesmo ambiente de software dos Capítulos 5-16.</span>
    <span>Uma tarefa que exige duas mãos — ex.: passar um objeto do braço esquerdo para o direito.</span>
  </div>
</section>

## 17.1 Por que dupla braço

<section id="why" className="section-card">
  <div className="section-title">
    <span>Motivação</span>
    <h2>17.1 Por que dupla braço</h2>
  </div>

Muitas tarefas reais de manipulação são genuinamente de duas mãos: pegar e passar, dobrar caixas, montar duas peças. O aprendizado bimanual por imitação é exatamente o cenário onde o ACT nasceu (ALOHA), e o ecossistema SO-ARM dá suporte nativo — o LeRobot traz os tipos `bi_so_follower` e `bi_so_leader`, que tratam dois braços como um robô só de 12 dimensões de ação (6 por braço).

Tudo que você aprendeu nos Capítulos 8-16 se transfere; só o hardware dobra, e cada comando ganha `left_arm_config` / `right_arm_config`.

</section>

## 17.2 Cabeamento e portas

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Cabeamento</span>
    <h2>17.2 Cabeamento e portas</h2>
  </div>

Conecte as quatro placas e anote a porta de cada braço:

| Papel | Porta |
| :--- | :--- |
| Seguidor esquerdo | `/dev/ttyACM0` |
| Seguidor direito | `/dev/ttyACM1` |
| Líder esquerdo | `/dev/ttyACM2` |
| Líder direito | `/dev/ttyACM3` |

Para calibrar, o tipo do seguidor é `so101_follower` e o do líder `so101_leader` (no LeRobot, `so100_leader` e `so101_leader` são a mesma implementação).

Permissões para as quatro portas:

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</section>

## 17.3 Calibração (passo-chave)

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>Calibração</span>
    <h2>17.3 Calibração (passo-chave)</h2>
  </div>

Calibre cada braço individualmente com o procedimento do Capítulo 10, usando **ids com sufixos `_left` / `_right`** — os tipos bimanuais procuram arquivos de calibração com exatamente esses sufixos.

**Seguidor esquerdo:**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

**Seguidor direito:**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

**Líder esquerdo:**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

**Líder direito:**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

Depois de calibrar, os arquivos ficam em:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

:::tip
**Já calibrou com outros ids?** Copie os arquivos em vez de repetir o procedimento físico:

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration/robots

cp $CAL_DIR/so101_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/so101_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_right.json
```
:::

</section>

## 17.4 Teleoperação de dupla braço

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Teleoperação</span>
    <h2>17.4 Teleoperação de dupla braço</h2>
  </div>

**Sem câmeras:**

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

**Com câmeras de punho** (índices via `lerobot-find-cameras opencv`, adicione ou remova conforme precisar):

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

:::warning
Dois seguidores agora dividem o mesmo espaço de trabalho. Atenção ao redor para evitar colisões entre eles — e entre as garras nas tarefas de passagem.
:::

</section>

## 17.5 Gravar um dataset bimanual

<section id="record" className="section-card">
  <div className="section-title">
    <span>Gravação</span>
    <h2>17.5 Gravar um dataset bimanual</h2>
  </div>

Salve localmente (com `--dataset.push_to_hub=false`; o `repo_id` precisa conter `/`, então `seeed/` serve de prefixo local):

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

Os dados vão para `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`, com a mesma estrutura do Capítulo 13. Para subir ao Hub, mantenha `HF_USER`, tire o `push_to_hub=false` e use `--dataset.repo_id=${HF_USER}/bimanual_so101_task`.

### Continuar uma gravação (retomar)

Se a gravação sair de forma inesperada, ou você coletar em várias sessões, use `--resume`:

- Sempre com `--resume=true`; senão o `LeRobotDataset.create()` falha porque a pasta já existe.
- `--dataset.num_episodes` conta **os episódios desta sessão**, não o total (15 gravados de 50 → ponha 35).
- Tente sair durante um episódio ou após um fim natural; evite sair na fase de "resetar o ambiente" (pode salvar um episódio vazio — o código recente pula sozinho):

```bash
lerobot-record \
  --resume=true \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=35 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### Reproduzir e apagar episódios

Reproduza um episódio específico nos braços reais (`episode` é base 0 — 24 é o 25º):

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

Apague um episódio ruim (kit do Capítulo 13):

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

O original é copiado para `.../bimanual_so101_task_old/`; apague o backup manualmente após verificar.

</section>

## 17.6 Treinamento ACT

<section id="training" className="section-card">
  <div className="section-title">
    <span>Treinar</span>
    <h2>17.6 Treinamento ACT</h2>
  </div>

**Do dataset local:**

```bash
lerobot-train \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=60000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

**Do Hugging Face Hub:**

```bash
export HF_USER=your_hf_username

lerobot-train \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=100000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

Acima usam-se os parâmetros padrão do ACT (`chunk_size=100`, `dim_model=512` etc.). A política lê automaticamente estados/ações de 12 dimensões (6 por braço) do dataset — sem configuração extra.

</section>

## 17.7 Implantação no robô real

<section id="deploy" className="section-card">
  <div className="section-title">
    <span>Implantar</span>
    <h2>17.7 Implantação no robô real</h2>
  </div>

Avalie com a receita do Capítulo 16, agora com os dois braços — salve a avaliação localmente:

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

Ou suba a avaliação ao Hub com `--dataset.repo_id=${HF_USER}/eval_bimanual_so101_task` e sem `dataset.root`.

</section>

## 17.8 FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>17.8 FAQ</h2>
  </div>

| Problema | Causa | Solução |
| :--- | :--- | :--- |
| A teleoperação pede recalibrar | O `bi_so_follower` não acha arquivos com sufixo `_left` / `_right` | Recalibre com ids com sufixos, ou copie os arquivos (17.3) |
| O líder não se move à mão | Torque do líder não desabilitado | Recalibre ou verifique os motores |
| "Directory already exists" ao retomar | Faltou `--resume=true` | Acrescente `--resume=true` ao `lerobot-record` |
| Braços esquerdo e direito trocados | Porta configurada errada | Troque `left_arm_config.port` e `right_arm_config.port` |
| Dataset não encontrado no treino | `root` sem especificar para dataset local | Acrescente `--dataset.root=./datasets/xxx` no treino |
| O dataset sobe sozinho | Faltou `push_to_hub=false` | Acrescente `--dataset.push_to_hub=false` ao gravar |
| Sai com `You must add one or several frames before calling add_episode` | Saiu na fase de reset; o episódio atual não tem quadros | O já gravado está intacto; continue com `--resume=true`; o código atual pula episódios vazios |

</section>

</div>
