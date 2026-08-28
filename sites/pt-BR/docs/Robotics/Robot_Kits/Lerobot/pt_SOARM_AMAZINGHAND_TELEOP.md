---
description: Este documento explica como combinar o braço seguidor SO-ARM101 com a mão hábil AmazingHand e realizar teleoperação usando o LeRobot.
title: Guia Completo de Treinamento para SO-ARM com AmazingHand
keywords:
  - Lerobot
  - SO-ARM
  - AmazingHand
  - Robótica
  - Teleoperação
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp
slug: /soarm_amazinghand_teleop
sku: 114993666,114993667,100063642,100062181
last_update:
  date: 2026-07-12
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-12'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/pt-br/soarm_amazinghand_teleop/
---

# Guia Completo de Treinamento para SO-ARM com AmazingHand

Este documento explica como combinar o braço seguidor SO-ARM101 com a mão hábil AmazingHand e realizar teleoperação usando o LeRobot.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" style={{width: 'auto', minWidth: '195px', height: 'auto', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px'}} href="https://www.seeedstudio.com/Amazing-Hand-Right-Hand-The-Open-Source-Robotic-Hand-Developer-Kit.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> AmazingHand Adquira agora 🖱️</font></span></strong>
</a></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" style={{width: 'auto', minWidth: '195px', height: 'auto', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px'}} href="https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> SO-ARM101 Adquira agora 🖱️</font></span></strong>
</a></div>

## 1. Conexão de Hardware

1. O arquivo STL para o adaptador SOARM-para-AmazingHand está disponível aqui:

[lerobot/soarm\_amazinghand\_link\_step\_stl/step at soarm\_amazinghand · xiehuangbao888/lerobot](https://github.com/xiehuangbao888/lerobot/tree/soarm_amazinghand/soarm_amazinghand_link_step_stl/step)

2. Remova a garra original do SOARM.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/1.webp" />
</div>

3. Instale o adaptador SOARM-para-AmazingHand no braço.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/2.webp" />
</div>

4. Instale a mão hábil AmazingHand.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/3.webp" />
</div>

5. Faça a fiação dos dispositivos da seguinte forma:

| Dispositivo | Porta serial | Descrição |
| ---------------------------------- | -------------- | --------------------- |
| Braço seguidor SO-101 (servo da garra nº 6 removido) | `/dev/ttyACM0` | Apenas os servos das juntas 1~5 são mantidos |
| Braço líder SO-101 (servo da garra nº 6 mantido) | `/dev/ttyACM1` | Abertura/fechamento da garra usado como sinal de entrada |
| Mão hábil AmazingHand | `/dev/ttyACM2` | 8 servos com IDs 1~8 |

> Se as suas portas seriais forem diferentes, substitua-as pelos nomes reais das portas nos comandos a seguir.

---

O robô irá:

- Controlar as 5 juntas do braço seguidor (servos 1~5) via `/dev/ttyACM0`.
- Controlar a mão hábil AmazingHand via `/dev/ttyACM2`.
- Mapear o `gripper.pos` do braço líder **proporcionalmente** para o ângulo de abertura da mão hábil (0 = totalmente aberta, 100 = totalmente fechada).

Os arquivos de calibração são salvos automaticamente em:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_amazing_hand/<robot.id>.json
~/.cache/huggingface/lerobot/calibration/teleoperators/so101_leader/<teleop.id>.json
```

---

## 2. Ambiente e Conexão

```bash
git clone https://github.com/xiehuangbao888/lerobot.git
```

Mude para o ambiente virtual lerobot existente.

Primeiro, conceda permissões aos dispositivos:

```bash
sudo chmod 666 /dev/ttyACM*
```

#### Etapa 1: Calibrar o Braço Líder

```bash
cd ~/lerobot
conda activate lerobot
python -m lerobot.scripts.lerobot_calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader
```

Siga as instruções:

1. Coloque todas as juntas do braço líder em suas posições médias e pressione Enter.
2. Mova cada junta até seus alcances máximo e mínimo, por sua vez, e então pressione Enter para finalizar.

#### Etapa 2: Calibrar o Braço Seguidor

```bash
python -m lerobot.scripts.lerobot_calibrate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2
```

Siga as instruções:

1. Coloque as 5 juntas do braço seguidor em suas posições médias e pressione Enter.
2. Mova as 5 juntas até seus alcances máximo e mínimo, por sua vez, e então pressione Enter para finalizar.

> Observação: O braço seguidor possui apenas 5 juntas; o servo da garra nº 6 foi removido.

#### Etapa 3: Executar a Teleoperação

```bash
python -m lerobot.scripts.lerobot_teleoperate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true
```

---

Você pode personalizar o movimento de preensão. O arquivo relevante está localizado em:

```text
src/lerobot/robots/so_amazing_hand/config_so_amazing_hand.py
```

---

## 3. Coletar Conjunto de Dados com a Mão Hábil

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true \
    --dataset.repo_id=seeed/amazing_soarm \
    --dataset.num_episodes=20 \
    --dataset.single_task="Pick up the cube with the dexterous hand"
```

Descrição dos parâmetros:

| Parâmetro | Descrição |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| `--robot.cameras` | Configuração da câmera; suporta `opencv`, `realsense`, etc. `index_or_path` é o índice da câmera ou o caminho do fluxo de vídeo. |
| `--dataset.repo_id` | ID do conjunto de dados no Hugging Face, no formato `{username}/{dataset_name}`. |
| `--dataset.num_episodes` | Número de episódios a serem gravados. |
| `--dataset.single_task` | Descrição da tarefa escrita nos metadados do conjunto de dados. |
| `--robot.hand_use_proportional_control` | Padrão é `true`; não é necessário defini-lo explicitamente. Defina como `false` para comportamento binário de abrir/fechar. |

---

## 4. Treinamento da Política

```bash
lerobot-train \
  --dataset.repo_id=seeed/amazing_soarm \
  --policy.type=act \
  --output_dir=outputs/train/amazing_soarm \
  --job_name=amazing_soarm \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=60000 \
```

## 5. Avaliação e Implantação

### Avaliar a Política Treinada no Robô Real

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --policy.path=outputs/train/amazing_soarm/checkpoints/last/pretrained_model \
    --dataset.repo_id=seeed_val/amazinghand_pick_cube_eval \
    --dataset.num_episodes=10 \
    --dataset.single_task="Pick up the cube with the dexterous hand" \
    --display_data=true
```
