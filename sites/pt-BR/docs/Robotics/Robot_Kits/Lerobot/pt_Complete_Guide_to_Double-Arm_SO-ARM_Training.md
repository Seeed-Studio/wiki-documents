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
  date: 7/1/2026
  author: ZhuYuan
translation:
  skip:
    - zh-CN
url: https://wiki.seeedstudio.com/pt-br/lerobot_double_arm_so_arm_training/
---
# Guia Completo para Treinamento de SO-ARM de Dois Braços

## Introdução

Este guia percorre todo o pipeline para treinar um sistema robótico SO-ARM de dois braços com o LeRobot. Ele abrange a configuração de hardware, calibração dos braços, teleoperação de dois braços, gravação e gerenciamento de conjuntos de dados, treinamento de política ACT e implantação no robô real. Seguindo estas etapas, você pode coletar dados de demonstração com dois braços líderes e dois braços seguidores, treinar uma política de aprendizado por imitação e implantá-la no robô real.

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

### 0.1 Instalar Dependências

Consulte os links relacionados.

### 0.2 Permissões USB

```bash
sudo chmod 666 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3 /dev/ttyACM4
```

## 1. Calibração (Etapa Chave)

### 1.1 Calibrar o Braço Seguidor Esquerdo

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_left
```

### 1.2 Calibrar o Braço Seguidor Direito

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower_right
```

### 1.3 Calibrar o Braço Líder Esquerdo

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_left
```

### 1.4 Calibrar o Braço Líder Direito

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader_right
```

Após a calibração, os arquivos serão salvos em:

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

### (Opcional) Se Você Já Tiver Calibrado com Outros IDs

Por exemplo, se você usou anteriormente `my_awesome_follower_arm1`, `my_awesome_follower_arm2`, etc., você pode copiar os arquivos de calibração:

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

### 2.1 Sem Câmera

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

### 2.2 Com Câmera

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

Você pode usar `lerobot-find-cameras opencv` para visualizar os índices das câmeras.

### Dicas de Segurança

- Esteja atento ao ambiente ao redor para evitar colisões dos braços seguidores.

## 3. Gravar Conjunto de Dados

### 3.1 Salvar Localmente (Não Enviar para o Hub)

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

Os dados serão salvos em `~///bimanual_so101_task/`, estruturados da seguinte forma:

```text
./datasets/bimanual_so101_task/
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

### 3.3 Continuar Gravação (Retomar)

Se a gravação for encerrada inesperadamente (por exemplo, pressionando o botão direito para sair durante a fase de reinicialização) ou se você quiser concluir a coleta em várias sessões, você pode usar `--resume` para continuar adicionando episódios ao mesmo conjunto de dados.

**Observações**:

- Você deve adicionar `--resume=true`; caso contrário, `LeRobotDataset.create()` reportará um erro porque o diretório já existe.
- `--dataset.num_episodes` se refere a **quantos episódios gravar desta vez**, não ao total desejado. Por exemplo, se 15 episódios já foram gravados e você quer chegar a 50, defina como `35`.
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

### 3.4 Reproduzir e Excluir Episódios

#### Reproduzir um Episódio Específico

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

#### Excluir um Episódio Específico

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

Após a exclusão, o conjunto de dados será reescrito no local, e os dados originais serão copiados para `./datasets/bimanual_so101_task_old/`. Depois de confirmar que o novo conjunto de dados está correto, você pode excluir o backup manualmente:

```bash
rm -rf ./datasets/bimanual_so101_task_old
```

> Observação: Se você estiver usando uma versão mais antiga do LeRobot anterior à correção, apontar `--root` para o diretório raiz do dataset local pode falhar devido a erros de análise de caminho. O `lerobot_edit_dataset.py` no projeto atual foi corrigido para esse cenário.

#### Excluir todo o Dataset

```bash
rm -rf ./datasets/bimanual_so101_task
```

---

## 4. Treinamento ACT

### 4.1 Treinar a partir de Dataset Local

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

> O acima utiliza os parâmetros padrão do ACT (`chunk_size=100`, `dim_model=512`, etc.). Se o dataset for pequeno (por exemplo, menos de 50 episódios), você pode reduzir explicitamente o tamanho do modelo para diminuir o risco de overfitting, por exemplo: `--policy.chunk_size=50 --policy.dim_model=256 --batch_size=16 --steps=30000`.

---

## 5. Implantação em Robô Real

### 5.1 Salvar Dados de Avaliação Localmente

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
  --dataset.repo_id=local/eval_bimanual_so101_task8 \
  --dataset.root=./datasets/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

### 5.2 Fazer Upload para o Hugging Face Hub

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
| "Directory already exists" ao continuar a gravação                       | `--resume=true` não foi adicionado                                            | Adicione `--resume=true` ao comando `lerobot-record`                                                                                                                     |
| Braços esquerdo e direito estão invertidos                               | Erro de configuração de porta                                                 | Troque `left_arm_config.port` e `right_arm_config.port`                                                                                                                  |
| Dataset não encontrado durante o treinamento                             | `root` não foi especificado para o dataset local                              | Adicione `--dataset.root=./datasets/xxx` durante o treinamento                                                                                                           |
| Dataset é enviado automaticamente                                         | `push_to_hub=false` não foi definido                                          | Adicione `--dataset.push_to_hub=false` durante a gravação                                                                                                                |
| Sai com `You must add one or several frames before calling add_episode`  | Saiu durante a fase de reset, o episódio atual não possui frames              | Não afeta os dados já gravados; continue gravando com `--resume=true`; o código atual corrigiu esse cenário e episódios vazios serão automaticamente ignorados          |
|                                                                           |                                                                               |                                                                                                                                                                          |
