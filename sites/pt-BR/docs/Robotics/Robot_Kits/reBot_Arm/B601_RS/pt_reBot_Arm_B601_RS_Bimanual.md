---
description: Este wiki abrange calibração, teleoperação, coleta de dados e treinamento ACT para dois braços reBot RS / DM com LeRobot.
title: Colaboração Bimanual reBot-RS
keywords:
  - LeRobot
  - Huggingface
  - robotic arm
  - rebot arm
  - robotics
slug: /rebot_arm_b601_rs_bimanual
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-11-19
  author: zhuyuan
translation:
  skip: [[zh-CN]]
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_bimanual/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Colaboração Bimanual reBot-RS

<div style={{ textAlign: 'center' }}>
    <img width={800} style={{ maxWidth: '100%', height: 'auto' }} alt="reBot-RS bimanual collaboration"
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_Bimanual/rs_bimanual.webp" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/catalog/product/view/id/7046" target="_blank" rel="noopener noreferrer">
    <span>Adquira agora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>


## 1. Configuração do Ambiente

Antes de usar dois braços, configure o ambiente seguindo os tutoriais de introdução para um único braço:

- [Introdução Rápida ao reBot-RS](/pt-br/rebot_b601_rs_getting_started/)
- [reBot-RS com LeRobot](/pt-br/rebot_arm_b601_rs_lerobot/)

### 1.1 Ativar o Ambiente Existente

Depois de concluir com êxito todo o fluxo de trabalho de um único braço, prossiga para instalar o ambiente bimanual.

```bash
conda activate lerobot

cd ~
git clone https://github.com/xiehuangbao888/lerobot-robot-seeed-b601.git
cd lerobot-robot-seeed-b601
pip install -e .
```

### 1.2 Atribuições de Portas Usadas Neste Guia

| Dispositivo | Esquerdo | Direito |
| --- | --- | --- |
| Líder do braço 102 | `/dev/ttyUSB0` | `/dev/ttyUSB1` |
| Seguidor RS | `can0` | `can1` |
| Seguidor DM, serial Damiao | `/dev/ttyACM0` | `/dev/ttyACM1` |

## 2. Calibração Bimanual

Mantenha o mesmo `robot.id` e `teleop.id` durante a calibração e as operações subsequentes. Ambos os exemplos RS e DM usam `bi_follower`, e os dois líderes usam `bi_leader`. O `id` identifica arquivos de calibração, não o modelo do motor. Se você calibrou anteriormente seus braços DM com `bi_follower_dm`, continue usando esse ID nos comandos subsequentes para esses braços.

<Tabs groupId="rebot-bimanual-motor" defaultValue="rs">
<TabItem value="rs" label="RS">

### 2.1 Calibrar Dois Seguidores RS

**RS**

**esquerdo**

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

**direito**

```bash
sudo ip link set can1 down 2>/dev/null
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can1 up
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1
```

</TabItem>
<TabItem value="dm" label="DM">

### 2.2 Calibrar Dois Seguidores DM: Serial Damiao

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1
```

</TabItem>
</Tabs>

### 2.3 Calibrar Dois Líderes

```bash
lerobot-calibrate \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

### 2.4 Procedimento de Calibração

:::warning

1. Siga as instruções para calibrar os braços esquerdo e direito na ordem.
2. Se a calibração já existir, pressione Enter para reutilizá-la ou digite `c` e pressione Enter para recalibrar.
3. Quando for solicitado posicionar manualmente o braço em zero, mova todo o braço atual para a pose zero especificada, feche totalmente a garra vazia e confirme.
4. A calibração do seguidor redefine as posições zero de todos os motores em todo o braço seguidor, não apenas da garra. Não confirme o zeramento em uma pose arbitrária.

Sair da calibração não redefine automaticamente os braços. Os arquivos de calibração são armazenados em `~/.cache/huggingface/lerobot/calibration/` por padrão, com subdiretórios para os tipos de dispositivo subjacentes e `_left` ou `_right` anexados ao ID de cada lado. Verifique novamente a calibração após substituir um braço físico ou alterar as posições zero dos motores.

:::

## 3. Teleoperação Bimanual

<Tabs groupId="rebot-bimanual-motor" defaultValue="rs">
<TabItem value="rs" label="RS">

### 3.1 Teleoperar Dois Braços RS

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
<TabItem value="dm" label="DM">

### 3.2 Teleoperar Dois Braços DM: Serial Damiao

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
</Tabs>

## 4. Coleta de Dados

Verifique se a teleoperação funciona antes de executar os comandos de gravação. Os exemplos gravam dois episódios de 20 segundos para verificar o pipeline de dados. Substitua `dataset.single_task` pela tarefa que você realmente demonstrar.

<Tabs groupId="rebot-bimanual-motor" defaultValue="rs">
<TabItem value="rs" label="RS">

### 4.1 Dois Braços RS: Gravação com Três Câmeras

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
<TabItem value="dm" label="DM">

### 4.2 Dois Braços DM: Serial Damiao e Gravação com Três Câmeras

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
</Tabs>

## 5. Treinamento e Avaliação

:::note

Esta seção mantém os métodos de treinamento reBot-RS LeRobot e adapta a avaliação, a teleoperação opcional e o cliente de inferência assíncrona para a configuração bimanual RS acima. Use um modelo treinado no seu conjunto de dados bimanual e mantenha os IDs de calibração, nomes de câmeras, resolução e taxa de quadros consistentes com a gravação. Substitua nomes de conjuntos de dados, descrições de tarefas e caminhos de modelos pelos seus valores reais. Este ambiente bimanual usa `trackio.enable`; adapte a configuração `wandb.enable` do tutorial de origem para a versão instalada.

:::

<Tabs>
<TabItem value="act" label="ACT">

Consulte o tutorial oficial [ACT](https://huggingface.co/docs/lerobot/act)

**Treinamento**

Para treinar uma política para controlar seu robô, use o script `python -m lerobot.scripts.train`. Alguns parâmetros são obrigatórios. Aqui está um comando de exemplo:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

**Se você quiser treinar em um conjunto de dados local, certifique-se de que o `repo_id` corresponda ao nome usado durante a coleta de dados e adicione `--policy.push_to_hub=false`.**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::tip

Se você estiver usando uma GPU da série RTX 50, será necessário adicionar `--dataset.video_backend=pyav` para contornar APIs ausentes na versão de prévia do torchvision. O comando de treinamento se torna:

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::

Explicação do comando

- **Especificação do dataset**: Fornecemos o dataset por meio do parâmetro `--dataset.repo_id=${HF_USER}/rebot_test`.
- **Etapas de treinamento**: Modificamos o número de etapas de treinamento usando `--steps=300000`. O algoritmo usa por padrão 800000 etapas; ajuste com base na dificuldade da sua tarefa. Você pode definir um valor maior se não tiver certeza, pois checkpoints são gerados durante o treinamento e a avaliação pode ser retomada a partir de qualquer checkpoint.
- **Tipo de policy**: Fornecemos a policy com `policy.type=act`. Da mesma forma, você pode alternar entre policies como [`act`, `diffusion`, `pi0`, `pi0fast`, `sac`, `smolvla`]. Isso carregará a configuração de `configuration_act.py`. Importante: essa policy irá se adaptar automaticamente aos estados dos motores do seu robô, às ações dos motores e ao número de câmeras, pois essas informações já estão armazenadas no seu dataset.
- **Seleção de dispositivo**: Usamos `policy.device=cuda` porque estamos treinando em uma GPU Nvidia, mas você pode usar `policy.device=mps` para treinar em Apple Silicon.
- **Ferramenta de visualização**: Usamos `wandb.enable=true` para visualizar gráficos de treinamento usando o [Weights and Biases](https://docs.wandb.ai/quickstart). Isso é opcional, mas, se você usar, certifique-se de ter feito login executando `wandb login`.

**Avaliação**

Você pode usar a função `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py), mas com um checkpoint de policy como entrada. Por exemplo, execute este comando para gravar 10 episódios de avaliação:

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
```

1. O parâmetro `--policy.path` indica o caminho para o arquivo de pesos dos resultados do treinamento da sua policy (por exemplo, `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). Se você enviar o arquivo de pesos do resultado do treinamento do modelo para o Hub, também poderá usar o repositório do modelo (por exemplo, `${HF_USER}/act_rebot_test`).
2. O nome do dataset `dataset.repo_id` começa com `eval_`. Essa operação irá gravar separadamente vídeos e dados durante a avaliação, que serão salvos na pasta que começa com `eval_`, como `seeed/eval_test123`.
3. Se você encontrar `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante a fase de avaliação, exclua primeiro a pasta que começa com `eval_` e depois execute o programa novamente.
4. Ao encontrar `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, observe que palavras-chave como `top`, `left_wrist` e `right_wrist` no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o dataset.

</TabItem>

<TabItem value="smolvla" label="SmolVLA">

Consulte o tutorial oficial [SmolVLA](https://huggingface.co/docs/lerobot/smolvla).

SmolVLA é um **modelo base de robótica leve** fornecido pela Hugging Face. Ele foi projetado para permitir que você use seu próprio dataset LeRobot gravado e **faça fine-tuning rapidamente** para obter resultados em robôs reais.

Simplificando, suas entradas/saídas são:

- Entrada: filmagem de múltiplas câmeras + estado atual do robô (sensores/juntas etc.) + uma instrução de tarefa em linguagem natural
- Saída: um bloco contínuo de ações para mover o braço robótico e executar a tarefa

```bash
pip install -e ".[smolvla]"
```

**Coleta de datasets (recomendado)**

SmolVLA é um "modelo base". Para ter um bom desempenho na sua bancada, com suas câmeras, garra e objetos, normalmente é necessário fazer fine-tuning com seus próprios dados.

- Comece com cerca de 50 episódios (muito poucos podem levar a aprendizado/generalização ruins).
- Se sua tarefa tiver "variáveis" (por exemplo, diferentes posições de cubos na mesa), garanta que cada variação tenha demonstrações suficientes:
  - Exemplo: 5 posições × 10 episódios cada = 50 episódios
- Experiência: Gravar apenas 25 episódios geralmente é insuficiente. Tanto a qualidade quanto a quantidade de dados são importantes.

**Treinamento**

Use `smolvla_base` (o modelo pré-treinado de 450M) como ponto de partida e faça fine-tuning no seu dataset. O exemplo oficial treina por 20k etapas; em uma única A100 isso leva cerca de 4 horas (apenas para referência; o tempo real varia conforme o hardware).

Se você não tiver uma GPU disponível, considere treinar via um notebook Colab (consulte o tutorial oficial).

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

Dicas:

- Se você ficar sem memória, reduza primeiro `--batch_size`. Depois que estiver rodando, aumente gradualmente.
- Para ver os parâmetros disponíveis: `lerobot-train --help`

**Avaliação**

A fase de avaliação carrega seu modelo com fine-tuning, permite que o robô execute a tarefa e grava o processo de avaliação como um novo dataset (para revisar vídeos e analisar resultados).

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.id=bi_follower \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=${HF_USER}/FINETUNE_MODEL_NAME
```

Como preencher os parâmetros:

- `--robot.left_arm_config.port` e `--robot.right_arm_config.port`: use as interfaces CAN dos seguidores RS esquerdo e direito, `can0` e `can1` neste guia.
- `--robot.id`: O ID do seu robô (deve corresponder ao que você usou durante calibração/gravação).
- `--robot.cameras`: Altere para o `index_or_path` real da sua câmera e garanta que as chaves das câmeras (por exemplo, `top`, `left_wrist`, `right_wrist`) correspondam exatamente às usadas ao gravar o dataset.
- `--dataset.single_task`: Deve corresponder à descrição da tarefa usada ao gravar o dataset.
- `--dataset.repo_id`: O nome do dataset de saída da avaliação; se você estiver logado no Hugging Face, ele será criado/enviado para a sua conta.
- `--policy.path`:
  - Se o modelo estiver localmente: preencha com o caminho dos pesos no diretório de saída do treinamento (por exemplo, `outputs/train/my_smolvla/checkpoints/last/pretrained_model`)
  - Se o modelo estiver no Hub: preencha com `${HF_USER}/FINETUNE_MODEL_NAME`

Opcional: Se você quiser "teleoperar manualmente para ajustar" entre episódios de avaliação, pode adicionar teleop (preencha de acordo com seu dispositivo e configuração):

```bash
--teleop.type=bi_seeed_102_leader \
--teleop.left_arm_config.port=/dev/ttyUSB0 \
--teleop.right_arm_config.port=/dev/ttyUSB1 \
--teleop.id=bi_leader
```

</TabItem>

<TabItem value="pi0" label="Pi0">

Consulte o tutorial oficial [Pi0](https://huggingface.co/docs/lerobot/pi0).

π₀ (Pi0) é um modelo de **Visão-Linguagem-Ação** proposto pela Physical Intelligence para um controle de robô mais "geral". Você pode pensar nele assim: ele consegue tanto ver imagens de câmera quanto entender uma instrução em linguagem natural e, em seguida, gerar ações para controlar o braço robótico.

Usá-lo no LeRobot é simples: basta definir o tipo de policy como `--policy.type=pi0` durante o treinamento (não é necessário repetir os conceitos gerais de treinamento/avaliação abordados na seção ACT).

```bash
pip install -e ".[pi]"
```

:::tip
Se você estiver usando uma versão mais antiga do LeRobot (por exemplo, 0.4.0), talvez seja necessário instalar a dependência `pi` a partir do código-fonte no GitHub (a documentação oficial corrigirá isso em um patch posterior):

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**Treinamento**

```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

Parâmetros comuns (apenas os específicos do Pi0 / mais frequentemente ajustados):

- `--policy.pretrained_path=lerobot/pi0_base`: Modelo base. Oficialmente também é fornecido `lerobot/pi0_libero` (versão orientada ao dataset Libero); você pode tentar alternar com base na sua tarefa.
- `--policy.compile_model=true`: Ativa otimização por compilação; o treinamento pode ficar mais rápido (a primeira compilação é mais lenta).
- `--policy.gradient_checkpointing=true`: Economiza significativamente VRAM, adequado quando a VRAM é limitada.
- `--policy.dtype=bfloat16`: Precisão mista, mais amigável para velocidade/VRAM (recomendado quando o hardware suporta).
- `--policy.train_expert_only=true` (truque para economizar VRAM): Congela a parte grande do modelo (VLM), treinando apenas o "especialista de ação" e as camadas de projeção; economiza mais VRAM, mas a capacidade treinável é mais limitada, adequado para começar ou para experimentos rápidos com poucos dados.

**Avaliação**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="pi05" label="Pi0.5">

Consulte o tutorial oficial [Pi0.5](https://huggingface.co/docs/lerobot/pi05).

π₀.₅ (Pi0.5) também é um modelo de **Visão-Linguagem-Ação** proposto pela Physical Intelligence, que pode ser entendido como uma "versão atualizada" de π₀, com foco em capacidade aprimorada de **generalização em mundo aberto**: não apenas tendo bom desempenho em cenários fixos vistos durante o treinamento, mas também concluindo tarefas de forma mais confiável em novos ambientes, com novos objetos e novas disposições.

A "generalização" que ele aborda pode ser aproximadamente dividida em três níveis (exemplos para entendimento):

- **Camada física**: Pegar uma colher/prato desconhecido sabendo como segurá-lo (cabo/borda) e operar em ambientes desorganizados.
- **Camada semântica**: Entender "onde colocar as coisas / qual ferramenta usar", por exemplo, sapatos devem ir no sapateiro, roupas no cesto de roupa suja.
- **Camada ambiental**: Adaptar-se a cenários "bagunçados" mais realistas, como casas, escritórios, hospitais etc.

Para usá-lo no LeRobot: basta definir o tipo de política como `--policy.type=pi05`.

```bash
pip install -e ".[pi]"
```

:::tip
Se você estiver usando uma versão mais antiga do LeRobot (por exemplo, 0.4.0), talvez seja necessário instalar a dependência `pi` a partir do código-fonte no GitHub (a documentação oficial corrigirá isso em um patch subsequente):

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**Treinamento**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

Parâmetros comuns (relacionados ao Pi0.5):

- `--policy.pretrained_path=lerobot/pi05_base`: Modelo base. Oficialmente também é fornecido `lerobot/pi05_libero`.
- `--policy.train_expert_only=true` (truque para economizar VRAM): Congela a parte do modelo grande (VLM), treinando apenas o "especialista de ação" e as camadas de projeção.
- `--policy.normalization_mapping=...`: Se as estatísticas de normalização do seu conjunto de dados não corresponderem / estiverem ausentes, você pode usar esse mapeamento para forçar um método de normalização.

Se o seu conjunto de dados não tiver estatísticas de quantis (exigidas por algumas versões/formats), o projeto oficial também fornece uma abordagem com script de conversão: completar/convertar as estatísticas do conjunto de dados antes do treinamento (consulte a documentação oficial para detalhes).

**Avaliação**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="groot-n15" label="GR00T N1.5">

Consulte o tutorial oficial [GR00T N1.5](https://huggingface.co/docs/lerobot/groot).

GR00T N1.5 é um modelo base aberto fornecido pela NVIDIA para raciocínio robótico mais geral e aprendizado de habilidades. É um modelo de **corpo cruzado (cross-embodiment)**: ele pode receber entradas multimodais como **linguagem** e **imagens**, e executar tarefas de manipulação em diferentes ambientes.

A chave para usá-lo no LeRobot é definir o tipo de política como `--policy.type=groot`. Observação: o GR00T N1.5 atualmente tem requisitos de ambiente mais altos (depende de FlashAttention e requer uma GPU CUDA). Recomenda-se fazer o ACT / Pi0 funcionar primeiro antes de tentar o GR00T.

**Instalação (Importante)**

De acordo com a documentação oficial, o GR00T N1.5 requer **flash-attn** para funcionar e só pode ser usado em **dispositivos compatíveis com CUDA**.

Etapas recomendadas (execute na ordem):

1. Configure primeiro o ambiente base (Python, CUDA, drivers etc.) seguindo o guia de instalação. **Não instale `lerobot` nesta etapa**.
2. Instale o PyTorch (faixa de versão conforme os requisitos oficiais):

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

:::tip
Se você estiver usando a série RTX 50, você precisa de: Python=3.10, CUDA=12.8, Torch=2.7.1

```bash
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
```

:::

3. Instale a dependência flash-attn e o próprio flash-attn:

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

:::tip
Se você estiver usando a série RTX 50, você precisa de: flash_attn=2.8.0

```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```

:::

4. Instale a dependência `groot` do LeRobot:

```bash
pip install "lerobot[groot]"
```

:::tip
Se a instalação do flash-attn falhar, geralmente está relacionada a (1) incompatibilidade de versão entre PyTorch/CUDA, (2) dependências de compilação ausentes ou (3) ambiente muito novo/muito antigo. Nesse caso, consulte primeiro a documentação oficial do GR00T e o guia de instalação do PyTorch.
:::

**Treinamento (Fine-tuning)**

O projeto oficial fornece um exemplo de treinamento multi-GPU (`accelerate launch --multi_gpu ...`). Se você tiver apenas uma GPU, também pode tentar executá-lo primeiro em modo de processo único (suporte / detalhes de parâmetros estão sujeitos à documentação oficial).

Multi-GPU (variáveis precisam ser substituídas):

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

Explicação dos parâmetros (os mais comumente modificados):

- `--dataset.repo_id`: Seu conjunto de dados de treinamento (`username/dataset_name` no Hub ou cache local correspondente ao `repo_id`).
- `--output_dir`: Diretório de saída do treinamento (os pesos/checkpoints serão colocados aqui).
- `--steps`, `--batch_size`: Passos de treinamento e tamanho do batch. Modelos grandes são sensíveis à VRAM; se não rodar, reduza primeiro o `batch_size`.
- `--policy.repo_id`: Se você quiser enviar o modelo para o Hub, preencha o nome do repositório de modelo que deseja criar.

**Avaliação (Execução no Robô)**

Após o treinamento, você pode usar `lerobot-record` para avaliação/gravação como em outras políticas. Para usuários do reBot B601-RS bimanual, consulte o seguinte comando:

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

Licença: Este modelo segue a licença Apache 2.0 (consistente com o repositório GR00T original).

</TabItem>

<TabItem value="peft" label="PEFT (Optional)">

PEFT (Parameter-Efficient Fine-Tuning) é um conjunto de métodos e ferramentas de "adaptação eficiente em parâmetros" para adaptar grandes modelos pré-treinados a novas tarefas **sem atualizar todos os parâmetros do modelo**. Para as políticas pré-treinadas do LeRobot (por exemplo, SmolVLA, π₀, etc.), você normalmente pode treinar apenas um pequeno número de parâmetros de "adaptador" (por exemplo, LoRA) para obter resultados próximos ao fine-tuning completo, reduzindo ao mesmo tempo o uso de VRAM e o custo de treinamento.

**Instalação**

Instale a dependência opcional `peft` do LeRobot para usar parâmetros relacionados a PEFT:

```bash
# Method 1: Source installation (in the lerobot root directory)
pip install -e ".[peft]"
```

```bash
# Method 2: pip installation
pip install "lerobot[peft]"
```

Para mais métodos de adaptação e explicações de conceitos, consulte a documentação oficial:
[🤗 PEFT Documentation](https://huggingface.co/docs/peft/index)

**Exemplo: Fine-tuning do SmolVLA com LoRA (subtarefa libero_spatial do Libero)**

O exemplo a seguir mostra como realizar o fine-tuning com LoRA de `lerobot/smolvla_base` no conjunto de dados `HuggingFaceVLA/libero`. Os nomes dos parâmetros são baseados na versão atual do LeRobot; consulte também `lerobot-train --help`.

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**Principais parâmetros de PEFT**

- `--peft.method_type`: Seleciona o método PEFT. LoRA (Low-Rank Adapter) é um dos métodos mais usados.
- `--peft.r`: Rank do LoRA. Em geral, um rank maior significa maior capacidade de expressão, mas também mais parâmetros e uso de VRAM.

**Especificando camadas para injetar LoRA (Opcional)**

Por padrão, o PEFT normalmente injeta LoRA nas camadas de projeção mais críticas do modelo (por exemplo, `q_proj`, `v_proj` da atenção, etc.), e pode cobrir adicionalmente camadas de projeção relacionadas a estado/ação. Se você precisar mirar em camadas diferentes, use `--peft.target_modules` para especificar as camadas alvo.

Padrões comuns incluem:

1) Por lista de sufixos de nomes de módulos (exemplo):

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) Usando uma expressão regular (exemplo, ajuste de acordo com os nomes reais dos módulos):

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**Especificando certas camadas para treinamento completo (Opcional)**

Se você quiser que certos módulos sejam "totalmente treinados" (em vez de apenas injetar LoRA), use `--peft.full_training_modules` para especificá-los. Por exemplo, treinar completamente apenas `state_proj`:

```bash
--peft.full_training_modules="['state_proj']"
```

**Recomendações de taxa de aprendizado (valores de experiência)**

A taxa de aprendizado do LoRA normalmente pode ser uma ordem de grandeza maior do que o fine-tuning completo (experiência comum: ~10x). Por exemplo, o fine-tuning completo costuma usar `1e-4`, enquanto o LoRA pode começar em `1e-3`; se você tiver decaimento de taxa de aprendizado (scheduler) ativado, a taxa de aprendizado final também costuma ser definida em torno de `1e-4` como referência.

</TabItem>

<TabItem value="multi-gpu" label="Multi-GPU (Opcional)">

**1. Etapas de treinamento**

**Método um: treinamento Multi-GPU via argumentos de linha de comando**

Primeiro, instale o sistema de aceleração de treinamento no seu ambiente lerobot:

```bash
pip install accelerate
```

Em seguida, execute o seguinte comando para iniciar o treinamento Multi-GPU:

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

Explicação dos principais parâmetros do accelerate:

- `--multi_gpu`: Habilita treinamento Multi-GPU
- `--num_processes=2`: Número de GPUs a serem usadas (geralmente igual ao número de GPUs)
- `--mixed_precision=fp16`: Usa precisão mista fp16 (ou bf16 se o seu hardware suportar)

Observe que **bf16 requer suporte de hardware** e não está disponível em todas as GPUs.

| Tipo de precisão | Suporte de hardware |
| -- | -- |
| fp16 | Suportado por quase todas as GPUs NVIDIA |
| bf16 | Suportado apenas em GPUs mais recentes (arquitetura Ampere e posteriores) |

Se a sua GPU não suportar bf16, escolha fp16 na configuração do accelerate ou especifique fp16 explicitamente na linha de comando.

**Método dois: usando um arquivo de configuração do Accelerate (Opcional)**

Se você realiza treinamento Multi-GPU com frequência, pode salvar a configuração de treinamento acima para evitar entradas repetitivas na linha de comando.

> **Dica**: Se você não entender esta seção, ou apenas quiser começar rapidamente,
> **você pode pular esta seção e usar o Método um (argumentos de linha de comando).**

O objetivo de `accelerate config` é:

**Salvar o seu ambiente de hardware (quantidade de GPUs, precisão mista, etc.) como um arquivo de configuração,
para que você não precise preencher repetidamente esses parâmetros ao executar `accelerate launch` no futuro.**

Ele não altera nenhuma lógica de treinamento do LeRobot; apenas reduz a entrada repetitiva de parâmetros.

Se você apenas **usa Multi-GPU ocasionalmente**, ou esta é sua primeira tentativa, **não há problema em não usá-lo**.

---

Execute:

```bash
accelerate config
```

No processo de configuração interativa, para o cenário comum de Multi-GPU em uma única máquina, você pode selecionar da seguinte forma:

- Ambiente de computação: Esta máquina
- Número de máquinas: 1
- Número de processos: Número de GPUs a serem usadas (geralmente igual ao número de GPUs)
- IDs de GPU a serem usadas: Pressione Enter diretamente (significa usar todas as GPUs)
- Precisão mista:
  - Prefira fp16
  - Se você confirmar que a GPU suporta bf16, também pode escolher bf16

Após a configuração, você pode treinar com:

```bash
accelerate launch $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

**Impacto do treinamento Multi-GPU nos parâmetros de treinamento e estratégias de ajuste**

O LeRobot não ajusta automaticamente a taxa de aprendizado ou os passos de treinamento com base no número de GPUs, para evitar alterar o comportamento de treinamento sem o conhecimento do usuário. Isso difere de outros frameworks de treinamento distribuído comumente usados.

Se você quiser **ajustar hiperparâmetros para treinamento Multi-GPU**, precisa fazê-lo manualmente seguindo estas etapas.

**Impacto nos passos e estratégia de ajuste**

Como o Multi-GPU aumenta o batch size efetivo (batch_size × num_gpus):

(Para entender isso de forma intuitiva: se o treinamento é como caminhar, uma GPU dá um passo de um metro, duas GPUs dão um passo de dois metros. Para alcançar a mesma distância (dados totais aprendidos pelo modelo), o treinamento com duas GPUs deve reduzir os passos pela metade. Da mesma forma, n GPUs = 1/n.)

Portanto, ao treinar com várias GPUs, você deve reduzir adequadamente o número de passos de treinamento.

Treinamento com uma única GPU:

- batch_size = 8
- steps = 100000

Treinamento com duas GPUs (batch size efetivo se torna 16):

- batch_size, se ainda definido como 8
- steps podem ser reduzidos para 50000

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

**Impacto na taxa de aprendizado e estratégia de ajuste**

Ao usar várias GPUs, cada atualização de passo usa mais amostras.

Se você quiser manter a "velocidade de aprendizado" do modelo semelhante à de uma única GPU,
normalmente precisa aumentar a taxa de aprendizado proporcionalmente ao número de GPUs.

- Nova taxa de aprendizado = taxa de aprendizado de uma única GPU × número de GPUs

Por exemplo:

Se a taxa de aprendizado de uma única GPU (optimizer.lr) for 1e-4,
ao usar 2 GPUs, você pode alterá-la para 2e-4:

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --optimizer.lr=2e-4 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

Observação:

Estas não são regras obrigatórias, mas práticas recomendadas comuns.

Se você não tiver certeza de como ajustar, também pode:

- Manter a taxa de aprendizado inalterada
- Manter os passos de treinamento inalterados

Desde que o processo de treinamento seja estável, os resultados ainda são utilizáveis.

Para configurações mais avançadas e solução de problemas, consulte a documentação do [Accelerate](https://huggingface.co/docs/accelerate/index). Se quiser aprender mais sobre treinamento em grandes quantidades de GPUs, confira este excelente guia: [Ultrascale Playbook](https://github.com/huggingface/ultrascale-playbook).
</TabItem>

<TabItem value="async-inference" label="Inferência assíncrona (Opcional)">

Sem inferência assíncrona, o fluxo de controle do LeRobot pode ser entendido como inferência sequencial/síncrona convencional: a política prediz um bloco de ações, depois o executa, depois espera pela próxima predição. Para modelos maiores, isso pode causar pausas perceptíveis enquanto o robô espera por novos blocos de ações. O objetivo da inferência assíncrona é permitir que o robô execute o bloco de ações atual enquanto pré-computa o próximo, reduzindo o tempo ocioso e melhorando a capacidade de resposta. A inferência assíncrona se aplica a políticas suportadas pelo LeRobot que produzem blocos de ações, como ACT, OpenVLA, Pi0, SmolVLA. Como a inferência e o controle real são desacoplados, a inferência assíncrona também permite usar máquinas mais poderosas para inferência do robô remotamente.

Você pode ler mais sobre inferência assíncrona neste [post de blog](https://huggingface.co/blog/async-robot-inference) da Hugging Face.

Vamos apresentar alguns conceitos básicos:

- **Cliente**: Conecta-se ao braço robótico e às câmeras, coleta observações (imagens, pose do robô, etc.), envia-as para o servidor; também recebe blocos de ações do servidor e os executa em ordem.
- **Servidor**: O dispositivo que fornece poder de computação. Recebe dados da câmera e do robô, infere (computa) blocos de ações e os envia de volta ao cliente. Pode ser o mesmo dispositivo conectado ao robô e às câmeras, outro computador na mesma LAN ou um servidor em nuvem.
- **Bloco de ações**: Uma série de comandos de ação do braço robótico, produzidos pela política por meio de inferência no servidor.
- **Inferência síncrona**: Prediz um bloco, executa um bloco; o robô terá intervalos ociosos esperando o próximo bloco ser inferido. Quando o modelo é maior e o poder de computação é insuficiente, o intervalo de inferência é significativo — o braço se move, depois pausa (inferência), depois se move novamente.
- **Inferência assíncrona**: Diferente da inferência síncrona, enquanto o robô executa o bloco atual, o servidor já está computando o próximo bloco; partes sobrepostas são agregadas para um controle mais responsivo.

**Três Cenários de Implantação de Inferência Assíncrona**

**1. Implantação em Única Máquina**

Robô, câmeras, cliente e servidor estão todos no mesmo dispositivo.
Este é o caso mais simples — o servidor escuta em 127.0.0.1, e o cliente também se conecta a 127.0.0.1:porta. Os exemplos de comando na documentação oficial seguem este cenário.

**2. Implantação em LAN**

Robô e câmeras se conectam a um dispositivo leve, e o servidor de políticas é executado em outro dispositivo de alto poder de computação na mesma LAN.
Neste caso, o servidor deve escutar em um endereço acessível a outras máquinas, e o cliente deve se conectar ao IP de LAN do servidor, não a 127.0.0.1.

**3. Implantação entre Redes / em Nuvem**

O servidor de políticas é executado em um host de nuvem publicamente acessível, e o cliente se conecta via rede pública.
Essa abordagem pode aproveitar GPUs mais potentes em hosts de nuvem. Com boas condições de rede, o tempo de ida e volta (latência de rede) pode ser relativamente pequeno em comparação com o tempo de inferência, mas isso depende do seu ambiente de rede real.

> Nota de segurança: o pipeline de inferência assíncrona do LeRobot apresenta riscos de gRPC sem autenticação + desserialização com pickle. Se o servidor hospedar informações ou serviços importantes, não é recomendado expor o serviço diretamente à internet pública ao implantar em uma rede pública. Uma abordagem mais segura é usar VPN, tunelamento SSH ou, pelo menos, restringir os IPs de origem do grupo de segurança ao IP público do seu cliente.

**Iniciando a Implantação de Inferência Assíncrona**

**Etapa 1: Configuração de Ambiente**

Primeiro, instale as dependências adicionais necessárias para inferência assíncrona usando pip. Tanto o cliente quanto o servidor precisam do lerobot instalado com a dependência extra:

```bash
pip install -e ".[async]"
```

**Etapa 2: Configuração e Verificação de Rede**

**1. Problemas de Proxy**

Se o seu terminal tiver variáveis de ambiente de proxy configuradas e ocorrerem problemas de conexão, você pode desativá-las temporariamente:

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

Observação: o comando acima afeta apenas a sessão de terminal atual. Se você abrir uma nova janela de terminal, precisará executá-lo novamente.

**2. Permitir Portas no Firewall / Grupos de Segurança**

- Implantação em única máquina: geralmente pode ser ignorada.
- Implantação em LAN: é necessário permitir a porta de escuta no lado do servidor.
  Exemplo de permissão de uma porta de escuta na LAN (executar no servidor):

```bash
sudo ufw allow 8080/tcp
```

- Implantação em nuvem: é necessário permitir a porta no grupo de segurança do servidor em nuvem e, idealmente, restringir os IPs de origem.

Se estiver executando em um servidor em nuvem:
Permita a porta 8080 no grupo de segurança na página de gerenciamento do servidor ou use outra porta já permitida. Os métodos variam conforme o provedor de nuvem.

**3. Confirmar Endereço IP**

A implantação em única máquina pode ignorar esta etapa (o IP é sempre 127.0.0.1).

**4. Teste de Conexão**

- Implantação em única máquina: ignore esta etapa.
- Implantação em LAN / nuvem: é recomendável testar se o cliente consegue acessar a porta do servidor:

```bash
nc -vz <LAN_IP_address> 8080
```

```bash
nc -vz <server_public_IP> 8080
```

**Etapa 3: Iniciar o Serviço**

**Cenário A: Implantação em Única Máquina**

Inicie o serviço local em um terminal:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080
```

Depois que ele iniciar com sucesso, você precisa manter este terminal aberto e criar um novo terminal para executar outros comandos.

**Cenário B: Implantação em LAN**

Execute no servidor:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

Quando o cliente se conectar, `--server_address` deve usar o endereço IP de LAN do servidor: `<LAN_IP_address>:8080`.

**Cenário C: Implantação em Servidor na Nuvem**

Execute no servidor:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

Quando o cliente se conectar, `--server_address` deve usar o endereço IP público do servidor: `<server_public_IP>:8080`.

**Etapa 4: Escolher Parâmetros de Inferência**

Execute no cliente:

```bash
python -m lerobot.async_inference.robot_client \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false
```

Explicação dos principais parâmetros:

- `--server_address`: Endereço do servidor. Use `127.0.0.1:port` para única máquina e o IP do servidor para LAN/nuvem.
- `--actions_per_chunk`: Tamanho de cada bloco de ações (número de ações). Valores maiores significam menor frequência de inferência, mas resultados por inferência mais estáveis; valores menores significam movimento mais suave, porém com maior carga de inferência no servidor.
- `--chunk_size_threshold`: Limite de mistura entre blocos de ações antigos e novos. Quando o bloco antigo é executado até essa proporção, a mistura com o novo bloco começa.
- `--fixed_update_fps`: Frequência de envio de comandos de controle, correspondente à suavidade do movimento do braço robótico.
- `--visualize_action_queue`: Se deve visualizar o tamanho da fila de ações em tempo de execução. Quando ativado, você pode ver de forma mais intuitiva se a fila atinge o fundo com frequência, ajudando a ajustar actions_per_chunk e chunk_size_threshold.

**Etapa 5: Ajustar Parâmetros com Base no Comportamento do Robô**

Na inferência assíncrona, há dois parâmetros adicionais que não estão presentes na inferência síncrona e que precisam de ajuste:

- `--actions_per_chunk`: Tamanho de cada bloco de ações. Se o movimento do robô estiver aos solavancos/travando, aumente esse valor; se a resposta do robô tiver atraso perceptível, diminua esse valor.
- `--chunk_size_threshold`: Limite de mistura entre blocos de ações antigos e novos. Normalmente, comece testando a partir de `0.5`.

A inferência assíncrona precisa equilibrar: a velocidade de geração de blocos de ações do servidor deve ser maior ou igual à velocidade de consumo do cliente. Caso contrário, a fila de ações ficará vazia e o robô começará a engasgar (isso pode ser visto na curva de visualização da fila tocando o fundo).

</TabItem>
</Tabs>
