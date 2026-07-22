---
description: Guia completo para treinamento de SO-ARM de dois braços com LeRobot.
title: Guia Completo para Treinamento de SO-ARM de Dois Braços
keywords:
  - Lerobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 6/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/pt-br/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-07-07'
---

import Link from '@docusaurus/Link';

# Guia Completo para Treinamento de SO-ARM de Dois Braços

## Introdução

Este guia percorre todo o fluxo para treinar um sistema robótico SO-ARM de dois braços com o LeRobot. Ele abrange a configuração de hardware, calibração dos braços, teleoperação de dois braços, gravação e gerenciamento de conjuntos de dados, treinamento de política ACT e implantação no robô real. Seguindo estas etapas, você pode coletar dados de demonstração com dois braços líderes e dois braços seguidores, treinar uma política de aprendizado por imitação e implantá-la no robô real.

Primeiro, conecte os cabos da seguinte forma.


| Função             | Porta          |
| ------------------ | -------------- |
| Braço seguidor esquerdo  | `/dev/ttyACM0` |
| Braço seguidor direito | `/dev/ttyACM1` |
| Braço líder esquerdo    | `/dev/ttyACM2` |
| Braço líder direito   | `/dev/ttyACM3` |

O tipo de braço seguidor é `so101_follower`, e o tipo de braço líder é `so101_leader` (no LeRobot, `so100_leader` e `so101_leader` compartilham a mesma implementação).

---

## 0. Pré-requisitos

### 0.1 Instalar dependências

Para a configuração do ambiente, consulte o tutorial do SO-ARM:

<div style={{textAlign: 'center'}}>
    <Link to="/lerobot_so100m_new/#instalar-lerobot" style={{display: 'inline-block', width: 'auto', height: '40px', lineHeight: '40px', padding: '0 24px', whiteSpace: 'nowrap', backgroundColor: '#1eff00', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ Ir para Configuração do Ambiente
    </Link>
</div>

### 0.2 Permissões USB

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

## 1. Calibração (Etapa-chave)

### 1.1 Calibrar o braço seguidor esquerdo

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

### 1.2 Calibrar o braço seguidor direito

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

### 1.3 Calibrar o braço líder esquerdo

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

### 1.4 Calibrar o braço líder direito

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

Após a calibração, os arquivos serão salvos em:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

### (Opcional) Se você já tiver calibrado com outros IDs

Por exemplo, se você tiver usado anteriormente `my_awesome_follower_arm1`, `my_awesome_follower_arm2`, etc., você pode copiar os arquivos de calibração:

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

---

## 2. Teleoperação de Dois Braços

### 2.1 Sem câmera

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

### 2.2 Com câmera

Você pode usar `lerobot-find-cameras opencv` para visualizar os índices das câmeras, e pode adicionar ou remover câmeras conforme necessário.

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

### Dicas de segurança

- Fique atento ao ambiente ao redor para evitar colisões dos braços seguidores.

## 3. Gravar conjunto de dados

### 3.1 Salvar localmente (não enviar para o Hub)

Adicione `--dataset.root` e `--dataset.push_to_hub=false`.

> Observação: `repo_id` deve conter `/`. Para conjuntos de dados locais, você pode usar `local/` como um prefixo de espaço reservado; isso não fará upload de fato.

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

Os dados serão salvos em `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`, estruturados da seguinte forma:

```text
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

### 3.2 Enviar para o Hugging Face Hub

Se você quiser enviar automaticamente, mantenha `HF_USER` e remova `root` e `push_to_hub=false`:

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM3 \
  --teleop.right_arm_config.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### 3.3 Continuar gravação (retomar)

Se a gravação for encerrada inesperadamente (por exemplo, ao pressionar o botão direito para sair durante a fase de reinicialização) ou se você quiser concluir a coleta em várias sessões, você pode usar `--resume` para continuar adicionando episódios ao mesmo conjunto de dados.

**Observações**:

- Você deve adicionar `--resume=true`; caso contrário, `LeRobotDataset.create()` irá relatar um erro porque o diretório já existe.
- `--dataset.num_episodes` se refere a **quantos episódios gravar desta vez**, não ao total desejado. Por exemplo, se 15 episódios já tiverem sido gravados e você quiser chegar a 50, defina como `35`.
- Tente sair durante a gravação de um episódio ou após um término natural; evite sair durante a fase "Reset the environment" (o que pode causar falhas ao salvar episódios vazios).

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

### 3.4 Reproduzir e excluir episódios

#### Reproduzir um episódio específico

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

> `episode` é um índice baseado em 0, então `24` significa o 25º episódio.

#### Excluir um episódio específico

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

Após a exclusão, o conjunto de dados será reescrito no local, e os dados originais serão copiados para backup em `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old/`. Depois de confirmar que o novo conjunto de dados está correto, você pode excluir manualmente o backup:

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

#### Excluir todo o dataset

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

---

## 4. Treinamento ACT

### 4.1 Treinar a partir de dataset local

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

### 4.2 Treinar a partir do Hugging Face Hub

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

> O comando acima usa os parâmetros padrão do ACT (`chunk_size=100`, `dim_model=512`, etc.).

## 5. Implantação em robô real

### 5.1 Salvar dados de avaliação localmente

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

### 5.2 Fazer upload para o Hugging Face Hub

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

---

## 6. FAQ


| Problema                                                                 | Causa                                                                         | Solução                                                                                                                                                                  |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A teleoperação solicita recalibração                                      | `bi_so_follower` não consegue encontrar arquivos de calibração com sufixo `_left` / `_right` | Recalibre com IDs contendo `_left` / `_right`, ou copie arquivos de calibração existentes                                                                               |
| O braço líder não pode ser movido à mão                                   | O torque do líder não está desativado                                         | Recalibre ou verifique os motores                                                                                                                                        |
| "Directory already exists" ao continuar a gravação                        | `--resume=true` não foi adicionado                                            | Adicione `--resume=true` ao comando `lerobot-record`                                                                                                                     |
| Os braços esquerdo e direito estão trocados                               | Erro de configuração de porta                                                 | Troque `left_arm_config.port` e `right_arm_config.port`                                                                                                                  |
| Dataset não encontrado durante o treinamento                              | `root` não foi especificado para o dataset local                              | Adicione `--dataset.root=./datasets/xxx` durante o treinamento                                                                                                           |
| O dataset é enviado automaticamente                                       | `push_to_hub=false` não foi definido                                          | Adicione `--dataset.push_to_hub=false` durante a gravação                                                                                                                |
| Sai com `You must add one or several frames before calling add_episode`   | Saiu durante a fase de reset, o episódio atual não tem frames                 | Não afeta os dados já gravados; continue gravando com `--resume=true`; o código atual corrigiu esse cenário e episódios vazios serão automaticamente ignorados          |
|                                                                           |                                                                               |                                                                                                                                                                          |
