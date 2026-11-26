---
description: "Como treinar uma política SO-ARM bimanual (de dois braços) com o LeRobot: calibrar quatro braços, teleoperar, gravar conjuntos de dados, treinar ACT e implantar nos robôs reais."
title: SO-Arm Bimanual-Teleoperation
keywords:
  - LeRobot
  - SO-ARM
  - Braço Duplo
  - Robótica
  - Treinamento
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
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Guia Completo para Treinamento Bimanual do SO-ARM

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" width={800} height={456} style={{height: 'auto'}} alt="Kit de braço robótico SO-ARM bimanual" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-ARM101-Bimanual-Robot-Arm-Kit.html" target="_blank" rel="noopener noreferrer">
    <span>Obtenha o Kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## Introdução

Este guia percorre todo o pipeline para treinar um sistema robótico SO-ARM bimanual com o LeRobot. Ele abrange a configuração de hardware, calibração dos braços, teleoperação bimanual, gravação e gerenciamento de conjuntos de dados, treinamento de política ACT e implantação em robôs reais. Seguindo estas etapas, você pode coletar dados de demonstração com dois braços líderes e dois braços seguidores, treinar uma política de aprendizado por imitação e implantá-la no robô real.

### Roteiro de aprendizado recomendado

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#0-prerequisites">Prepare o ambiente</a></h4>
<p>Instale o LeRobot e identifique as quatro portas seriais.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#1-calibration-key-step">Calibre os braços</a></h4>
<p>Calibre os braços líder e seguidor esquerdo e direito.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#2-bimanual-teleoperation">Teleopere ambos os braços</a></h4>
<p>Verifique o controle e depois adicione câmeras conforme necessário.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#3-record-dataset">Grave um conjunto de dados</a></h4>
<p>Grave demonstrações e depois retome ou reproduza conforme necessário.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#4-act-training">Treine uma política ACT</a></h4>
<p>Escolha um conjunto de dados local ou do Hub como entrada.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#5-real-robot-deployment">Avalie no robô</a></h4>
<p>Carregue um checkpoint e salve os dados de avaliação.</p>
</div>
</section>

</div>

### Demonstração de colaboração bimanual do SO-ARM

<div className="video-container">
  <iframe src="https://www.youtube.com/embed/Y_P0BmlM7VI" title="Demonstração de colaboração bimanual do SO-ARM" width="900" height="500" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

## 0. Pré-requisitos

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Instale as dependências {#01-install-dependencies}

<p className="rebot-step-label">Etapa 1</p>

Configure o LeRobot usando o [SO-ARM Quick Start](/pt-br/lerobot_so100m_new/#install-lerobot).

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Conecte os braços e verifique as permissões USB {#02-usb-permissions}

<p className="rebot-step-label">Etapa 2</p>

Confirme as portas atribuídas aos seus quatro braços. Comandos posteriores usam as portas de exemplo abaixo. Substitua pelas suas portas reais e mantenha as atribuições de esquerda e direita consistentes.

| Função | Porta serial de exemplo | Tipo LeRobot |
| --- | --- | --- |
| Braço seguidor esquerdo | `/dev/ttyACM0` | `so101_follower` |
| Braço seguidor direito | `/dev/ttyACM1` | `so101_follower` |
| Braço líder esquerdo | `/dev/ttyACM2` | `so101_leader` |
| Braço líder direito | `/dev/ttyACM3` | `so101_leader` |

`so100_leader` e `so101_leader` compartilham a mesma implementação.

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</div>
</section>

</div>

## 1. Calibração (Etapa Principal)

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Calibre o Braço Seguidor Esquerdo {#11-calibrate-the-left-follower-arm}

<p className="rebot-step-label">Etapa 1</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Calibre o Braço Seguidor Direito {#12-calibrate-the-right-follower-arm}

<p className="rebot-step-label">Etapa 2</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Calibre o Braço Líder Esquerdo {#13-calibrate-the-left-leader-arm}

<p className="rebot-step-label">Etapa 3</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

### Calibre o Braço Líder Direito {#14-calibrate-the-right-leader-arm}

<p className="rebot-step-label">Etapa 4</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

</div>
</section>

</div>

Verifique o caminho salvo impresso pelo LeRobot. Estas são as pastas padrão atuais do Seeed LeRobot. Cada nome de arquivo é o respectivo `<id>.json`.

| Braço | Pasta de calibração |
| --- | --- |
| Seguidor | `~/.cache/huggingface/lerobot/calibration/robots/so_follower/` |
| Líder | `~/.cache/huggingface/lerobot/calibration/teleoperators/so_leader/` |

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="optional-if-you-have-previously-calibrated-with-other-ids">
<summary>Opcional: reutilizar arquivos de calibração para os mesmos braços</summary>

Reutilize arquivos apenas para o mesmo braço físico. O exemplo usa IDs mais antigos. Verifique a pasta e os nomes de arquivo nos logs do LeRobot.

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_right.json
```

</details>

</div>

## 2. Teleoperação Bimanual

<span id="safety-tips" aria-hidden="true" />

:::caution Dicas de segurança
Antes da teleoperação, fixe os braços, desobstrua sua área de trabalho e verifique se cada líder controla o respectivo seguidor.
:::

<span id="21-without-camera" aria-hidden="true" />
<span id="22-with-camera" aria-hidden="true" />

<Tabs defaultValue="no-camera">
<TabItem value="no-camera" label="Sem câmeras">

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

</TabItem>
<TabItem value="with-camera" label="Com câmeras">

Execute `lerobot-find-cameras opencv` para encontrar os índices das câmeras e substitua os valores de acordo com a sua configuração.

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

</TabItem>
</Tabs>

## 3. Gravar Conjunto de Dados

Aqui, um episódio é uma gravação completa de uma ação do robô.

Execute `lerobot-find-cameras opencv` para encontrar os índices das câmeras e substitua os valores de acordo com a sua configuração.

<span id="31-save-locally-do-not-upload-to-hub" aria-hidden="true" />
<span id="32-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Salvar localmente">

Este exemplo desativa o upload e usa o diretório de cache padrão. Para usar um caminho personalizado, adicione `--dataset.root`. O formato de `repo_id` é `namespace/dataset`.

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

O caminho padrão é `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`.

```text
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

</TabItem>
<TabItem value="hub" label="Upload para o Hugging Face Hub">

Defina `HF_USER` como o seu nome de usuário do Hugging Face e verifique se você tem permissão de escrita no repositório de destino. Este exemplo habilita o upload explicitamente.

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

</TabItem>
</Tabs>

| Opção | Significado |
| --- | --- |
| `--dataset.num_episodes` | Número de episódios a serem gravados nesta execução. |
| `--dataset.episode_time_s` | Duração de cada gravação, em segundos. |
| `--dataset.reset_time_s` | Tempo de reset entre gravações, em segundos. |
| `--dataset.fps` | Taxa de quadros da gravação. |
| `--dataset.single_task` | Descrição em texto da tarefa que está sendo demonstrada. |

### 3.3 Continuar gravação (retomar)

Use `--resume=true` para acrescentar ao mesmo dataset. Mantenha o ID do dataset, o caminho de armazenamento e a configuração do dispositivo consistentes. Se você já gravou 15 episódios e precisa de 50 no total, defina `--dataset.num_episodes` como 35. Pare após a conclusão de um episódio sempre que possível para evitar uma gravação sem quadros durante o reset.

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
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

Os índices dos episódios começam em 0, então `24` se refere à 25ª gravação.

#### Excluir um episódio específico

:::caution
O exemplo abaixo reescreve o dataset no local e faz backup dos dados anteriores em um diretório com sufixo `_old`. Para manter o dataset original, use [Salvar como um novo dataset](/pt-br/lerobot_dataset_tool/#excluir-episódios).
:::

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

#### Limpar o backup antigo {#delete-the-entire-dataset}

Depois que o novo dataset for verificado e o backup não for mais necessário, confirme que o caminho termina em `_old` antes de removê-lo.

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

## 4. Treinamento ACT

<span id="41-train-from-local-dataset" aria-hidden="true" />
<span id="42-train-from-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Treinar a partir de dados locais">

Se você gravou em um diretório personalizado, defina `--dataset.root` também para o treinamento.

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

</TabItem>
<TabItem value="hub" label="Treinar a partir de dados do Hub">

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

</TabItem>
</Tabs>

| Opção | Significado |
| --- | --- |
| `--dataset.repo_id` | ID do dataset de treinamento. |
| `--policy.type=act` | Seleciona a política ACT. |
| `--policy.device=cuda` | Treina em uma GPU CUDA. |
| `--steps` | Número de etapas de treinamento. Os comandos mostram valores de exemplo. |
| `--output_dir` | Diretório para a saída do treinamento. |

Os exemplos usam os padrões do ACT, incluindo `chunk_size=100` e `dim_model=512`.

## 5. Implantação em robô real

:::caution
Verifique o checkpoint da política, as portas seriais e as câmeras e, em seguida, limpe a área de trabalho dos braços antes de iniciar a avaliação.
:::

<span id="51-save-evaluation-data-locally" aria-hidden="true" />
<span id="52-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="Salvar dados de avaliação localmente">

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
  --dataset.repo_id=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
<TabItem value="hub" label="Fazer upload dos dados de avaliação para o Hub">

Defina `HF_USER` como o seu nome de usuário do Hugging Face e verifique se você tem permissão de escrita no repositório de destino. Este exemplo habilita o upload explicitamente.

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
</Tabs>

## 6. FAQ

| Problema                                                                 | Causa                                                                          | Solução                                                                                                                                                                  |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A teleoperação solicita recalibração                                      | `bi_so_follower` não consegue encontrar arquivos de calibração com sufixo `_left` / `_right` | Recalibre com IDs contendo `_left` / `_right`, ou copie arquivos de calibração existentes                                                                               |
| O braço líder não pode ser movido à mão                                   | O torque do líder não está desativado                                         | Recalibre ou verifique os motores                                                                                                                                        |
| "Directory already exists" ao continuar a gravação                        | `--resume=true` não foi adicionado                                            | Adicione `--resume=true` ao comando `lerobot-record`                                                                                                                     |
| Os braços esquerdo e direito estão invertidos                             | Erro de configuração de porta                                                 | Troque `left_arm_config.port` e `right_arm_config.port`                                                                                                                  |
| Dataset não encontrado durante o treinamento                              | `root` não foi especificado para o dataset local                              | Adicione `--dataset.root=./datasets/xxx` durante o treinamento                                                                                                           |
| O dataset é enviado automaticamente                                       | `push_to_hub=false` não foi definido                                          | Adicione `--dataset.push_to_hub=false` durante a gravação                                                                                                                |
| Sai com `You must add one or several frames before calling add_episode`   | Saiu durante a fase de reset, o episódio atual não tem quadros                | Não afeta os dados já gravados; continue gravando com `--resume=true`; o código atual corrigiu esse cenário e episódios vazios serão ignorados automaticamente          |
